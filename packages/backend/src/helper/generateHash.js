const config = require('../config/config')
const alphabet = config.alphabet.key

module.exports.generateHash = function () {
  let hash = ''
  let possible = alphabet

  for (let i = 0; i < 5; i++) {
    hash += possible.charAt(Math.floor(Math.random() * possible.length))
  }

  return hash
}
