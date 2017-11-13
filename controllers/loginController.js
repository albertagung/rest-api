let model = require('../models')
let getMatch = require('../helper/getMatch.js')
let jwt = require('jsonwebtoken')

// Get token
let getLogin = function(req,res,next){
  model.User.findAll(
    {
      where: {username: req.body.username}
    }
  ).then(function(rowsUser){
    let match = getMatch(req.body.password,rowsUser[0].salt)
    if(match === rowsUser[0].password){
      jwt.sign(
        {
          id: rowsUser[0].id,
          username: rowsUser[0].username,
          role:rowsUser[0].role
        },
        'hahaha',
        function(err,token){
          if(err){
            res.send(err)
          }
          else{
            req.header.token = token
            res.send('Login Succeed!')
          }
        }
      )
    }
  }).catch(function(err){
    res.send('Please Input Correct Username and Password')
  })
}

// Get verification
let verifyLogin = function(req,res,next){
  jwt.verify(
    req.header.token,
    'hahaha',
    function(err,decoded){
      if(err){
        res.send(err)
      }
      else{
        req.isVerified = decoded
        next()
      }
    }
  )
}

// Role verification (admin only)
let verifyAdmin = function(req,res,next){
  if(req.isVerified.role === 'admin'){
    next()
  }
  else{
    res.status(401).send('You are not supposed to see what in this page broh!')
  }
}

// Role verification (by id)
let verifyById = function(req,res,next){
  if(req.isVerified.id == req.params.id || req.isVerified.role === 'admin'){
    next()
  }
  else{
    res.status(401).send('You are not supposed to see what in this page broh!')
  }
}

module.exports = {
  getLogin,
  verifyLogin,
  verifyAdmin,
  verifyById
}
