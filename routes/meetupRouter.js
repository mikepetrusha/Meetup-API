const Router = require('express')
const router = new Router()
const meetupController = require('../controllers/meetupController')

router.get('/', meetupController.getAll)
router.get('/:id', meetupController.getOne)
router.post('/', meetupController.create)
router.patch('/:id', meetupController.update)
router.delete('/:id', meetupController.delete)

module.exports = router