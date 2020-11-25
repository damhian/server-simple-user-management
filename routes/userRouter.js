const router = require('express').Router()
const userController = require('../controllers/userController')
const auth = require('../middleware/auth')
const uniqueLogin = require('../middleware/uniqueLogin')

router.use(auth)

router.post('/register', uniqueLogin.checkDuplicateUsernameorEmail, userController.register)
router.post('/login', userController.login)

module.exports = router