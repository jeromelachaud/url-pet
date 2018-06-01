const UrlController = require('../controllers/url')
const express = require('express')
const router = express.Router()

router.post(
  '/create',
  UrlController.create,
)

router.delete(
  '/delete',
  UrlController.delete,
)

router.get(
  '/list',
  UrlController.list,
)

router.get(
  '/go',
  UrlController.go,
)

module.exports = router
