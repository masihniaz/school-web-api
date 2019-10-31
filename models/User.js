'use strict';
const bcrypt = require('bcrypt-nodejs');

const SALT_WORK_FACTOR = 12;

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: { 
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  
  User.associate = function(models) {
    // associations can be defined here
  };

  User.beforeCreate(async user => {
    bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
      if (err) throw(err);
      bcrypt.hash(user.password, salt, null, (err, hash) => {
        if(err) throw(err);
        user.password = hash;
      });
    });
  });

  User.beforeUpdate(async user => {
    bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
      if (err) throw(err);
      bcrypt.hash(user.password, salt, null, (err, hash) => {
        if(err) throw(err);
        user.password = hash;
      });
    });
  });

  return User;
};