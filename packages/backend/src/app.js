// Config
require('dotenv').config()
const config = require('./config/config')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json')

// Server
const express = require('express')
const app = express()
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

// Logs
const morgan = require('morgan')
app.use(morgan('dev'))

// Cors
const cors = require('cors')
app.use(cors())

// Body parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Routes
const userRoutes = require('./routes/user')
app.use('/user', userRoutes)

const urlRoutes = require('./routes/url')
app.use(['/url', '/'], urlRoutes)

// // Sequelize
const { sequelize } = require('./models')
sequelize.sync({ force: false })
  .then(() => {
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
  })

// Basic error handling
app.use((req, res, next) => {
  const error = new Error('Not found')
  error.status = 404
  next(error)
})

app.use((error, req, res, next) => {
  res.status(error.status || 500)
  res.json({
    error: {
      message: error.message,
    },
  })
})
