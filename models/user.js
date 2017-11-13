'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    salt: DataTypes.STRING
  },{
    hooks: {
      beforeCreate: function(userPass){
        let crypto = require('crypto');
        let len = 8
        let result = ''
        let char = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        for(let i = 0; i < len; i++){
          result += char.charAt(Math.floor(Math.random() * char.length));
        }
        let salt = result;
        console.log(salt);
        let hash = crypto.createHmac('sha256', salt).update(userPass.password).digest('hex');
        userPass.salt = result
        userPass.password = hash
      }
    }
  });
  return User;
};
