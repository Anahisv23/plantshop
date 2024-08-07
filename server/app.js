// server.js
const express = require('express');
const session = require("express-session")
const bodyParser = require('body-parser');
const path = require('path')
const accessTokenSecret = `${process.env.JWT}`;

const app = express();
const port = process.env.PORT || 1337;

const cors = require("cors")

// when frontend makes request accept request from render or localhost:3000 when in development
// axios localhost:3000
const allowedOrigin = process.env.NODE_ENV === 'production'
  ? 'https://plant-place.onrender.com/'
  : 'http://localhost:3000';


app.use(cors({
  origin: allowedOrigin, // Replace with your frontend's URL
  methods: 'GET,PUT,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
}));


// Middleware
app.use(bodyParser.json());

app.use(session({
  secret: accessTokenSecret,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false, user: null } // Set to true in production with HTTPS
}));


app.get('/', (req, res) => res.sendFile(path.join(__dirname, '..', 'public/index.html')));

// Routes
app.get('/', (req, res) => {
  res.send({ message: 'Hello from the backend!' });
});

app.use('/api', require('./api'))
app.use("/auth", require('./auth'))

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app