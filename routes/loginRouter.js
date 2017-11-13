let express = require('express')
let router = express.Router()
let loginController = require('../controllers/loginController.js')

// Login
router.post('/',loginController.getLogin)

module.exports = router
