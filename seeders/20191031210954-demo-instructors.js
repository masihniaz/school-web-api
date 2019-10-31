'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('instructors', [
      {
        "name": "Humberto",
        "lastName": "Nelhams",
        "email": "hnelhams5@wsj.com",
        "birthday": "1981-06-16",
        "address": "18033 Cascade Lane",
        "phoneNumber": "9393783428",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "name": "Corene",
        "lastName": "Antosik",
        "email": "cantosik6@aboutads.info",
        "birthday": "1985-09-24",
        "address": "48 Kingsford Road",
        "phoneNumber": "7829538354",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "name": "Thom",
        "lastName": "Mauvin",
        "email": "tmauvin7@answers.com",
        "birthday": "1983-11-30",
        "address": "521 Texas Parkway",
        "phoneNumber": "7112638480",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "name": "Gerri",
        "lastName": "Skaife",
        "email": "gskaife8@ucsd.edu",
        "birthday": "1982-01-20",
        "address": "5 Spohn Circle",
        "phoneNumber": "7713124461",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "name": "Jules",
        "lastName": "Dimitrijevic",
        "email": "jdimitrijevic9@soup.io",
        "birthday": "1984-09-10",
        "address": "1 Lighthouse Bay Street",
        "phoneNumber": "8314787949",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('instructors', null, {});
  }
};
