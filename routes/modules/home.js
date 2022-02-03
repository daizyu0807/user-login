const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  if (req.cookies.firstName) {
    const firstName = req.cookies.firstName
    res.render('logged', {firstName})
    return
  }
  res.render('index')
})

module.exports = router