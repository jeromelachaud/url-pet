const { Urls } = require('../models')
const language = require('../languages/').urlController

const { generateHash } = require('../helper/generateHash')
const { generateUrl } = require('../helper/generateUrl')
module.exports = {
  async create(req, res, next) {
    const { url } = req.body
    try {
      const doesUrlExist = await Urls.findOne({
        attributes: ['url', 'hash'],
        where: {
          url,
        },
      })
      if (doesUrlExist) {
        return res
          .status(409).send({
            message: language.urlAlreadyExists,
            shortUrl: generateUrl(doesUrlExist.hash),
          })
      }
      const newUrl = await Urls.create({
        url,
        hash: generateHash(),
      })
      res.status(201).send({
        message: language.success,
        shortUrl: generateUrl(newUrl.hash),
      })
    } catch (err) {
      res.status(500).send({
        message: err.message,
      })
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
        return res
          .status(404).send({ message: language.shortUrlDoesNotExist })
      }
      await Urls.destroy({ where: { hash } })
      res.status(200).send({ message: language.shortUrlDestroyed })
    } catch (err) {
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
      return res
        .status(404).send({ error: language.shortUrlDoesNotExist })
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
      res
        .status(200)
        .send(urls)
    } catch (err) {
      res.status(500).send({ error: language.genericError })
    }
  },
}
