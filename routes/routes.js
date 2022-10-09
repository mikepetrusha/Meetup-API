const Router = require('express')
const router = new Router()
const meetupRouter = require('./meetupRouter')
const userRouter = require('./userRouter')

router.use('/meetup', meetupRouter)
router.use('/user', userRouter)

module.exports = router