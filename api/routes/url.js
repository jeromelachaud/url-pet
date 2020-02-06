const UrlController = require('../controllers/url')
const express = require('express')
const router = express.Router()
const { jwtMiddleware } = require('../middleware/jwtMiddleware')

router.post('/create', UrlController.create)

router.delete('/delete', jwtMiddleware, UrlController.delete)

router.get('/list', jwtMiddleware, UrlController.list)

router.get('/:hash', UrlController.go)

module.exports = router
