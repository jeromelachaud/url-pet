const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

let sequelize
const env = process.env.NODE_ENV
const {
  database: { options },
} = config[env]

if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, options)
} else {
  sequelize = new Sequelize(undefined, undefined, undefined, options)
}

fs.readdirSync(__dirname)
  .filter(file => file !== 'index.js')
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })
db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
