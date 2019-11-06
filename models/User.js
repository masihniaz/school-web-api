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
  User.associate = function (models) {
    // associations can be defined here
  };

  User.beforeCreate(async (user) => {
    bcrypt.genSalt(SALT_WORK_FACTOR, (saltErr, salt) => {
      if (saltErr) throw (saltErr);
      bcrypt.hash(user.password, salt, null, (hashErr, hash) => {
        if (hashErr) throw (hashErr);
        user.password = hash;
      });
    });
  });

  return User;
};
