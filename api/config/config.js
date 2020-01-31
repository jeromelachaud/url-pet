require('dotenv').config()

const path = require('path')
const Sequelize = require('sequelize')

let SERVER_HOST = 'localhost'
let SERVER_PORT = process.env.PORT || 8081
let SERVER_PROTOCOL = 'http' // Note: I did not test https yet, so you might need more adjustments to make it work
let ROOT_URL = `${SERVER_PROTOCOL}://${SERVER_HOST}:${SERVER_PORT}`

module.exports = {
  development: {
    port: SERVER_PORT,
    rootUrl: ROOT_URL,
    database: {
      options: {
        dialect: 'sqlite',
        storage: path.resolve(__dirname, '../url-minifier.sqlite3'),
        operatorsAliases: { $and: Sequelize.Op.and },
      },
    },
  },
  production: {
    port: SERVER_PORT,
    rootUrl: `https://${process.env.HEROKU_APP_NAME}.com`,
    database: {
      use_env_variable: 'DATABASE_URL',
      dialect: 'postgres',
      ssl: true,
      dialectOptions: {
        ssl: {
          require: true,
        },
      },
      logging: true,
      operatorsAliases: false,
      options: {
        use_env_variable: 'DATABASE_URL',
        dialect: 'postgres',
        ssl: true,
        protocol: 'postgres',
        dialectOptions: {
          ssl: {
            require: true,
          },
        },
        logging: true,
        benchmark: true,
        operatorsAliases: false,
      },
    },
  },
  basicAuth: {
    credentials: {
      username: process.env.ADMIN_USERNAME,
      password: process.env.ADMIN_PASSWORD,
    },
  },
  alphabet: {
    key: '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ',
  },
}
