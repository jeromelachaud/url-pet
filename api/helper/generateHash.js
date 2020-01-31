const config = require('../config/config')
const alphabet = config.alphabet.key
console.log('TCL: alphabet', alphabet)

module.exports.generateHash = () => {
  let hash = ''
  var possible = alphabet

  for (var i = 0; i < 5; i++) {
    hash += possible.charAt(Math.floor(Math.random() * possible.length))
  }

  return hash
}
