const express = require('express')
const router = express.Router()
const { basicAuth } = require('../middleware/basicAuth')

router.post(
  '/login',
  basicAuth,
  (req, res) => {
    res.sendStatus(200)
  }
)

module.exports = router
