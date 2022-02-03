const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  const logoutMs = 'successfully logged out!'
  res
    .clearCookie('isLogged')
    .clearCookie('firstName')
    .render('index', { logoutMs })
})

module.exports = router