const express = require('express')
const router = express.Router()
const { basicAuth } = require('../middleware/basicAuth')
const UserController = require('../controllers/user')

router.post('/login', basicAuth, UserController.login)

module.exports = router
