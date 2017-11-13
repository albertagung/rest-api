let express = require('express')
let router = express.Router()
let signupController = require('../controllers/signupController.js')

// Sign up
router.post('/',signupController.signUpUser)

module.exports = router
