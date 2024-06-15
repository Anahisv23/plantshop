const authRouter = require("express").Router();
const { User } = require("../../db/index");
const jwt = require("jsonwebtoken");

const accessTokenSecret = `${process.env.JWT}`;
const refreshTokenSecret = `${process.env.REFRESH_SECRET}`;

let refreshTokens = [];

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) return res.sendStatus(401);

  jwt.verify(token, accessTokenSecret, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

authRouter.post('/login', async (req, res, next) => {
  try {
    const user = await User.authenticate(req.body);
    
    // Generate access and refresh tokens
    const accessToken = jwt.sign({ id: user.id }, accessTokenSecret, { expiresIn: '15m' });
    const refreshToken = jwt.sign({ id: user.id }, refreshTokenSecret);
    refreshTokens.push(refreshToken);
    
    res.send({ accessToken, refreshToken });
  } catch (err) {
    next(err);
  }
});

authRouter.post('/signup', async (req, res, next) => {
  try {
    const { firstName, lastName, email, password, marketingEmails } = req.body;
    
    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
      marketingEmails,
    });

    // Generate access and refresh tokens
    const accessToken = jwt.sign({ id: user.id }, accessTokenSecret, { expiresIn: '15m' });
    const refreshToken = jwt.sign({ id: user.id }, refreshTokenSecret);
    refreshTokens.push(refreshToken);

    res.status(201).send({ accessToken, refreshToken });
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      res.status(401).send("User already exists");
    } else {
      next(err);
    }
  }
})


  authRouter.post('/token', (req, res, next) => {
    const { token } = req.body;
    if (!token) return res.sendStatus(401);
    if (!refreshTokens.includes(token)) return res.sendStatus(403);
  
    jwt.verify(token, refreshTokenSecret, (err, user) => {
      if (err) return res.sendStatus(403);
      const accessToken = jwt.sign({ id: user.id }, accessTokenSecret, { expiresIn: '15m' });
      res.json({ accessToken });
    });
  });

  authRouter.post('/signout', (req, res, next) => {
    const { token } = req.body;
    refreshTokens = refreshTokens.filter(t => t !== token);
    res.json({ message: 'Signed out successfully' });
  });

  authRouter.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'This is a protected route' });
  });


module.exports = authRouter;
