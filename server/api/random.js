const randomRouter = require("express").Router();

randomRouter.get("/", (req, res, next) => {
    // res.json({ message: 'Hello from the random api!' });
    res.status(200).send("true")
});


module.exports = randomRouter