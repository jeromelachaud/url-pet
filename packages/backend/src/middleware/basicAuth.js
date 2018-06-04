const config = require('../config/config').basicAuth
const language = require('../languages/').userController
const auth = require('basic-auth')
module.exports = {
  basicAuth(req, res, next) {
    const credentials = req.path === '/login' ? req.body : auth(req)
    if (!credentials || credentials.name !== config.credentials.name ||
      credentials.pass !== config.credentials.pass) {
      res.status(401).send({ message: language.error })
    } else next()
  },
}
