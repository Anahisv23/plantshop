const authRouter = require("express").Router();
const { User } = require("../../db/index");
const jwt = require("jsonwebtoken");


// Make sure current user is authorized
const authenticationMiddleware = (req, res, next) => {
  console.log("in auth middleware", req.session.user)
  if (req.session.user) {
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};

authRouter.post("/login", async (req, res, next) => {
  try {
    const user = await User.authenticate(req.body);
    const token = await user.generateToken()
    await user.update({ token: token });

    req.session.user = { id: user.id, email: user.email, firstName: user.firstName, marketingEmails: user.marketingEmails };
    console.log("logged in")

    res.status(200).send(user);
  } catch (err) {
    if (err.message === "Incorrect username or password") {
      res.status(401).send({ error: "Incorrect username or password" });
    } else {
      next(err);
    }
  }
});

authRouter.post("/signup", async (req, res, next) => {
  try {
    const { firstName, lastName, email, password, marketingEmails } = req.body;

    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
      marketingEmails,
    });

    const token = await user.generateToken()
    user.update({ token: token });
    req.session.user = { id: user.id, email: user.email, firstName: user.firstName, marketingEmails: user.marketingEmails };

    res.status(201).send(user);
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      res.status(401).send("User already exists");
    } else {
      next(err);
    }
  }
});

// Route to get the current user
authRouter.get("/current", authenticationMiddleware, async (req, res, next) => {
  try {
    console.log("getting current user")
    res.status(200).send(req.session.user);
  } catch (error) {
    next(error);
  }
});


// authRouter.post("/signout", (req, res, next) => {
//   const { token } = req.body;
//   refreshTokens = refreshTokens.filter((t) => t !== token);
//   res.json({ message: "Signed out successfully" });
// });


module.exports = authRouter;
