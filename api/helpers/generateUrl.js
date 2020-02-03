const config = require('../config/config')

module.exports.generateUrl = hash => {
  return `${config[process.env.NODE_ENV].rootUrl}/${hash}`
}
