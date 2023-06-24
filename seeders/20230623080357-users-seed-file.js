'use strict'

/** @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcryptjs')
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          email: 'root@example.com',
          password: await bcrypt.hash('12345678', 10),
          is_admin: true,
          name: 'root',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          email: 'user1@example.com',
          password: await bcrypt.hash('12345678', 10),
          is_admin: false,
          name: 'user1',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          email: 'user2@example.com',
          password: await bcrypt.hash('12345678', 10),
          is_admin: false,
          name: 'user2',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          email: 'user3@example.com',
          password: await bcrypt.hash('12345678', 10),
          is_admin: false,
          name: 'user3',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          email: 'user4@example.com',
          password: await bcrypt.hash('12345678', 10),
          is_admin: false,
          name: 'user4',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          email: 'user5@example.com',
          password: await bcrypt.hash('12345678', 10),
          is_admin: false,
          name: 'user5',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          email: 'user6@example.com',
          password: await bcrypt.hash('12345678', 10),
          is_admin: false,
          name: 'user6',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          email: 'user7@example.com',
          password: await bcrypt.hash('12345678', 10),
          is_admin: false,
          name: 'user7',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', {})
  },
}
