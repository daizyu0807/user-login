const express = require('express')
const port = 3000

const app = express()

require('./config/mongoose') //引用 mongoose

app.get('/', (req, res) => {
  res.send('express is running in FE')
})

app.listen(port, () => {
  console.log(`user-login is running on http://localhost:${port}`)
})