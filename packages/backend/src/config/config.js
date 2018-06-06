const Sequelize = require('sequelize')

module.exports = {
  host: 'localhost',
  port: process.env.PORT || 8081,
  db: {
    host: 'urlminifieraws.c1v0bkjlnxr4.eu-west-1.rds.amazonaws.com',
    port: 5432,
    database: 'urlminifieraws',
    user: 'jerome',
    password: '1fdaj6im',
    options: {
      pool: {
        max: 5,
        min: 0,
        idle: 20000,
        acquire: 20000,
      },
      dialect: 'postgres',
      host: 'urlminifieraws.c1v0bkjlnxr4.eu-west-1.rds.amazonaws.com',
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
