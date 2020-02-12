require('dotenv').config()

const path = require('path')
const Sequelize = require('sequelize')

const SERVER_HOST = 'localhost'
const SERVER_PORT = process.env.PORT || 8081
const SERVER_PROTOCOL = 'http' // Note: I did not test https yet, so you might need more adjustments to make it work
let ROOT_URL = `${SERVER_PROTOCOL}://${SERVER_HOST}:${SERVER_PORT}`
const DB_USERNAME = 'admin'
const DB_PASSWORD = 'password'

module.exports = {
  development: {
    rootUrl: ROOT_URL,
    database: 'url.pet.local',
    username: DB_USERNAME,
    password: DB_PASSWORD,
    dialect: 'postgres',
    operatorsAliases: false,
    options: {
      protocol: 'postgres',
      dialect: 'postgres',
      operatorsAliases: false,
    },
  },
  test: {
    rootUrl: ROOT_URL,
    options: {
      dialect: 'sqlite',
      storage: path.resolve(__dirname, '../url-minifier.sqlite3'),
      operatorsAliases: { $and: Sequelize.Op.and },
      logging: false,
    },
  },
  production: {
    rootUrl: `https://url.pet`,
    dialect: 'postgres',
    operatorsAliases: false,
    use_env_variable: 'DATABASE_URL',
    ssl: true,
    dialectOptions: {
      ssl: {
        require: true,
      },
    },
    logging: true,
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
  server_port: SERVER_PORT,
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
