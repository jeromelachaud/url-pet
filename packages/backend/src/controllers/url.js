const language = require('../languages/').urlController

module.exports = {
  async create(req, res, next) {
    try {
      res.status(200).send('ok')
    } catch (err) {
      res.status(500).send({ error: language.genericError })
    }
  },

  async delete(req, res, next) {
    try {
      res.status(200).send('ok')
    } catch (err) {
      res.status(500).send({ error: language.genericError })
    }
  },

  async go(req, res, next) {
    try {
      res.status(200).send('ok')
    } catch (err) {
      res.status(500).send({ error: language.genericError })
    }
  },

  async list(req, res, next) {
    try {
      res.status(200).send('ok')
    } catch (err) {
      res.status(500).send({ error: language.genericError })
    }
  },
}
