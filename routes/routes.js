const Router = require('express')
const router = new Router()
const meetupRouter = require('./meetupRouter')

router.use('/meetup', meetupRouter)

module.exports = router