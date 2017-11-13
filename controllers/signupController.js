let model = require('../models')

// Post new user
let signUpUser = function(req,res){
  model.User.create(
    {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      username: req.body.username,
      password: req.body.password,
      role: 'user'
    }
  ).then(function(){
    res.send(`${req.body.first_name} ${req.body.last_name} has been added to user as user`)
  }).catch(function(err){
    res.send(err)
  })
}

module.exports = {
  signUpUser
}
