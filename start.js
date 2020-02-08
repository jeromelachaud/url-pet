require('dotenv').config()

const config = require('./api/config/config')
const web = require('./api/server')

const PORT = config.server_port

web
  .listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
  })
  .on('error', err => {
    console.log('ERROR: ', err)
  })
