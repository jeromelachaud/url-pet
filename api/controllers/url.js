const { urls: Urls } = require('../models')
const language = require('../languages/').urlController

const { generateHash } = require('../helpers/generateHash')
const { generateUrl } = require('../helpers/generateUrl')
module.exports = {
  async create(req, res, next) {
    const { url } = req.body
    try {
      const newUrl = await Urls.create({
        url,
        hash: generateHash(),
      })
      res.status(201).send({
        message: language.success,
        shortUrl: generateUrl(newUrl.hash),
      })
    } catch (err) {
      console.log('TCL: create -> err', err)
      res.status(500).send({ message: language.genericError })
    }
  },

  async delete(req, res, next) {
    const { hash } = req.body
    try {
      const doesHashExists = await Urls.findOne({
        attributes: ['hash'],
        where: { hash },
      })
      if (!doesHashExists) {
        return res.status(404).send({ message: language.shortUrlDoesNotExist })
      }
      await Urls.destroy({ where: { hash } })
      res.status(200).send({ message: language.shortUrlDestroyed })
    } catch (err) {
      console.log('TCL: delete -> err', err)
      res.status(500).send({ message: language.genericError })
    }
  },

  async go(req, res, next) {
    const { hash } = req.params
    const doesHashExists = await Urls.findOne({
      attributes: ['hash', 'url'],
      where: { hash },
    })
    if (!doesHashExists) {
      return res.status(404).send({ error: language.shortUrlDoesNotExist })
    }
    try {
      const { url } = doesHashExists
      Urls.increment('visit', { where: { hash } })

      res
        .set({
          'Cache-Control': 'no-store',
        })
        .redirect(301, url)
    } catch (err) {
      res.status(500).send({ error: language.genericError })
    }
  },

  async list(req, res, next) {
    try {
      const urls = await Urls.findAll({
        attributes: ['url', 'hash', 'visit'],
        order: [['visit', 'DESC']],
      })
      res.status(200).send(urls)
    } catch (err) {
      res.status(500).send({ error: language.genericError })
    }
  },
}
