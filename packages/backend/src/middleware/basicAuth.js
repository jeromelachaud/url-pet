const config = require('../config/config').basicAuth
const language = require('../languages/').userController
const auth = require('basic-auth')
module.exports = {
  basicAuth(req, res, next) {
    const credentials = auth(req)
    if (!credentials || credentials.name !== config.credentials.name ||
      credentials.pass !== config.credentials.pass) {
      res.status(401).send({ error: language.error })
    } else next()
  },
}
