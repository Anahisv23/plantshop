const router = require('express').Router()
const randomRouter = require("./random")


router.use('/random', randomRouter)

router.use((req, res, next) => {
    const error = new Error('Not Found')
    error.status = 404
    next(error)
  })
  
  module.exports = router