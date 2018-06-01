const config = require('../config/config')

module.exports.generateUrl = function (hash) {
  return `http://${config.host}:${config.port}/${hash}`
}
