// Config
// const swaggerUi = require('swagger-ui-express')
// const swaggerDocument = require('./swagger.json')

// Server
const express = require('express')
const server = express()
// server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

// Cors
const cors = require('cors')
server.use(cors())

// Body parser
const bodyParser = require('body-parser')
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: false }))

// Declare file to serve static file
const path = require('path')
server.use(express.static(path.join(__dirname, '../build')))

// Routes
server.get(['/login', '/admin'], (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'))
})

const userRoutes = require('./routes/user')
server.use('/user', userRoutes)

const urlRoutes = require('./routes/url')
server.use(['/url', '/'], urlRoutes)

const models = require('./models')
models.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })
module.exports = server
