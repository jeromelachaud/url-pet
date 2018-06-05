const Sequelize = require('sequelize')

module.exports = {
  host: process.env.APP_HOST,
  port: process.env.APP_PORT,
  db: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    options: {
      dialect: process.env.DB_DIALECT,
      host: process.env.DB_HOST,
      operatorsAliases: {$and: Sequelize.Op.and},
    },
  },
  basicAuth: {
    credentials: {
      name: process.env.BASIC_AUTH_NAME,
      pass: process.env.BASIC_AUTH_PASS,
    },
  },
  alphabet: {
    key: '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ',
  },
}
