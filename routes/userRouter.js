let express = require('express')
let router = express.Router()
let userController = require('../controllers/userController.js')

// Get all user
router.get('/',userController.getAllUsers)

// Get user by ID
router.get('/:id',userController.getUsersById)

// Create new user
router.post('/',userController.createNewUser)

// Delete a user
router.delete('/:id',userController.removeUserById)

// Edit user by ID
router.put('/:id',userController.editUserById)


module.exports = router
