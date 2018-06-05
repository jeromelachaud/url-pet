const path = require('path')
const Sequelize = require('sequelize')

module.exports = {
  host: 'localhost',
  port: 8081,
  db: {
    options: {
      dialect: 'sqlite',
      storage: path.resolve(__dirname, '../url-minifier.sqlite3'),
      operatorsAliases: {$and: Sequelize.Op.and},
    },
  },
  basicAuth: {
    credentials: {
      name: 'jerome',
      pass: 'admin',
    },
  },
  alphabet: {
    key: '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ',
  },
}
