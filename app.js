const express = require('express')
const port = 3000
const exphbs = require('express-handlebars')
const users = require('./models/users')
const app = express()

require('./config/mongoose') //引用 mongoose

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/login', (req, res) => {
  const { email, password} = req.body
  users.findOne({ $and: [{ email, password}]})
  .then(user => {
    if (user) {
      const firstName = user.firstName
      console.log(firstName)
      res.render('logged', {firstName})
    } else {
      const errorMs = 'Wrong email or password!'
      res.render('index', { email, errorMs })
    }
  })
})

// 設定 handlebars
app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs'})) // 建立 hbs 模版並引入參數
app.set('view engine', 'hbs') // 啟用樣板引擎 hbs

app.listen(port, () => {
  console.log(`user-login is running on http://localhost:${port}`)
})