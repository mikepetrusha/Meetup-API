const Router = require('express')
const router = new Router()
const meetupController = require('../controllers/meetupController')
const authMiddleware = require('../middleware/authMiddleware')

router.get('/', meetupController.getAll)
router.get('/:id', meetupController.getOne)
router.post('/', authMiddleware("ADMIN"), meetupController.create)
router.patch('/:id', authMiddleware("ADMIN"), meetupController.update)
router.delete('/:id', authMiddleware("ADMIN"), meetupController.delete)

module.exports = router