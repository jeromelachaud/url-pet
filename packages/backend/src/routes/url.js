const UrlController = require('../controllers/url')
const express = require('express')
const router = express.Router()
const { basicAuth } = require('../middleware/basicAuth')

router.post(
  '/create',
  basicAuth,
  UrlController.create,
)

router.delete(
  '/delete',
  basicAuth,
  UrlController.delete,
)

router.get(
  '/list',
  basicAuth,
  UrlController.list,
)

router.get(
  '/:hash',
  UrlController.go,
)

module.exports = router
