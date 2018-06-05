require('dotenv').config()
const config = require('./config/config')
const app = require('./app')

const { sequelize } = require('./models')
sequelize.sync({ force: false })
  .then(() => {
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
  })
