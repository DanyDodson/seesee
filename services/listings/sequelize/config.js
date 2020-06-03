require('dotenv').config()

module.exports.development = {
  dialect: 'mysql',
  seederStorage: 'sequelize',
  url: process.env.DB_URI || 'mysql://localhost@listings_service_db/db?charset=UTF8',
}
