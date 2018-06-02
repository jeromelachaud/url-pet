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
            error: language.urlAlreadyExists,
            shortUrl: generateUrl(doesUrlExist.hash),
          })
      }
      const newUrl = await Urls.create({
        url,
        hash: generateHash(),
      })
      res.status(201).send({
        success: language.success,
        shortUrl: generateUrl(newUrl.hash),
      })
    } catch (err) {
      res.status(500).send({ error: language.genericError })
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
          .status(404).send({ error: language.shortUrlDoesNotExist })
      }
      await Urls.destroy({ where: { hash } })
      res.status(200).send({ success: language.shortUrlDestroyed })
    } catch (err) {
      res.status(500).send({ error: language.genericError })
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
        .redirect(301, url)
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
