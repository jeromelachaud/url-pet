const language = require('../languages/').urlController
const jwt = require('../helpers/jwt')

module.exports = {
  async login(req, res) {
    try {
      const payload = req.body
      const token = await jwt.signToken(payload)
      res.status(200).send(token)
    } catch (err) {
      console.log('TCL: create -> err', err)
      res.status(500).send({ message: language.genericError })
    }
  },
}
