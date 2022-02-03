const express = require('express')
const router = express.Router()
const users = require('../../models/users')

router.post('/', (req, res) => {
  const { email, password} = req.body
  users.findOne({ $and: [{ email, password}]})
  .then(user => {
    if (user) {
      const firstName = user.firstName
      res
        .cookie('isLogged', 'true')
        .cookie('firstName', firstName)
      res.render('logged', {firstName})
    } else {
      const errorMs = 'Wrong email or password!'
      res.render('index', { email, errorMs })
    }
  })
})

router.get('/', (req, res) => {
  if (req.cookies.isLogged) {
    const firstName = req.cookies.firstName
    res.render('logged', {firstName})
    return
  }
  res.redirect('./')
})

module.exports = router