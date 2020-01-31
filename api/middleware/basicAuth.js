const config = require('../config/config').basicAuth
console.log('TCL: config', config)
const language = require('../languages/').userController
const auth = require('basic-auth')

module.exports = {
  basicAuth(req, res, next) {
    const credentials = req.path === '/login' ? req.body : auth(req)
    console.log('TCL: basicAuthazaz -> credentials', credentials)
    if (
      !credentials ||
      credentials.name !== config.credentials.username ||
      credentials.pass !== config.credentials.password
    ) {
      res.status(401).send({ message: language.error })
    } else next()
  },
}
