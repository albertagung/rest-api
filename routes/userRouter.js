let express = require('express')
let router = express.Router()
let userController = require('../controllers/userController.js')
let loginController = require('../controllers/loginController.js')

// Get all user
router.get('/',loginController.verifyLogin,loginController.verifyAdmin,userController.getAllUsers)

// Get user by ID
router.get('/:id',loginController.verifyLogin,loginController.verifyById,userController.getUsersById)

// Create new user
router.post('/',loginController.verifyLogin,loginController.verifyAdmin,userController.createNewUser)

// Delete a user
router.delete('/:id',loginController.verifyLogin,loginController.verifyAdmin,userController.removeUserById)

// Edit user by ID
router.put('/:id',loginController.verifyLogin,loginController.verifyById,userController.editUserById)


module.exports = router
