let model = require('../models')

// Get all users
let getAllUsers = function(req,res){
  model.User.findAll().then(function(rowsUsers){
    res.send(rowsUsers)
  }).catch(function(err){
    res.send(err)
  })
}

// Get user by ID
let getUsersById = function(req,res){
  model.User.findAll(
    {
      where: {id: req.params.id}
    }
  ).then(function(rowsUsersById){
    res.send(rowsUsersById)
  }).catch(function(err){
    res.send(err)
  })
}

// Create a user
let createNewUser = function(req,res){
  model.User.create(
    {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      username: req.body.username,
      password: req.body.password,
      role: req.body.role
    }
  ).then(function(){
    res.send(`${req.body.first_name} ${req.body.last_name} has been added as ${req.body.role}`)
  }).catch(function(err){
    res.send(err)
  })
}

// Delete user by ID
let removeUserById = function(req,res){
  model.User.destroy(
    {
      where: {id: req.params.id}
    }
  ).then(function(){
    res.send(`User with ID = ${req.params.id} has been deleted`)
  }).catch(function(err){
    res.send(err)
  })
}

// Edit user by ID
let editUserById = function(req,res){
  model.User.update(
    {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      username: req.body.username,
      role: req.body.role
    },
    {
      where: {id: req.params.id}
    }
  ).then(function(rowsUpdateUsers){
    res.send(rowsUpdateUsers)
  }).then(function(err){
    res.send(err)
  })
}

module.exports = {
  getAllUsers,
  getUsersById,
  createNewUser,
  removeUserById,
  editUserById
}
