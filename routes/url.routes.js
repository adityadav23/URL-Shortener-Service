const express = require('express')
const { shortenUrl } = require('../controllers/url.controller')
// creating express route handler
const router = express.Router()


router.post('/shorten', shortenUrl)

module.exports = router
