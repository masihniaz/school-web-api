const bcrypt = require('bcrypt-nodejs');
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      name: 'Masih',
      email: 'masihniaz@yahoo.com',
      password: bcrypt.hashSync('password', bcrypt.genSaltSync(10)),
      role: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Admin',
      email: 'admin@example.com',
      password: bcrypt.hashSync('password', bcrypt.genSaltSync(10)),
      role: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
