'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        first_name: 'John',
        last_name: 'Doe',
        username: 'johndoe',
        password: '1234',
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        first_name: 'Albert',
        last_name: 'Agung',
        username: 'admin',
        password: 'admin',
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        first_name: 'Joko',
        last_name: 'Hasan',
        username: 'joko',
        password: '1234',
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
