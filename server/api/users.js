const userRouter = require("express").Router();
const { User } = require("../../db/index");


userRouter.get("/", async (req, res, next) => {
    try {
        const user = await User.findOne({
            where: {
                firstName: req.body.name,
                email: req.body.email
            }
        })

        res.status(200).send(user)
    } catch (error) {
        next(error)
    }
});


module.exports = userRouter