const jwt = require('../helpers/jwt')
const language = require('../languages/')

module.exports = {
  async jwtMiddleware(req, res, next) {
    if (
      req.headers.authorization &&
      req.headers.authorization.split(' ')[0] === 'Bearer'
    ) {
      const token = await jwt.verifyToken(req.headers.authorization)
      if (token === false || token === undefined) {
        return res.status(401).send({
          error: language.error,
        })
      } else next()
    } else {
      return res.status(401).send({
        error: language.error,
      })
    }
  },
}
