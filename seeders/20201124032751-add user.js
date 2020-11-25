'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    let Users = [
      {
        username: 'ardan',
        password: 'ardan',
        email: 'ardan123@test.com',
        createdAt: new Date (),
        updatedAt: new Date (),
      },
      {
        username: 'turan',
        password: 'turan',
        email: 'turan123@test.com',
        createdAt: new Date (),
        updatedAt: new Date (),
      },
      {
        username: 'serin',
        password: 'serin',
        email: 'serin123@test.com',
        createdAt: new Date (),
        updatedAt: new Date (),
      }
      
    ]
   await queryInterface.bulkInsert('Users', Users);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
