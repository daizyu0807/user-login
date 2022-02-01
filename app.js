const express = require('express')
const port = 3000
const exphbs = require('express-handlebars')
const app = express()

require('./config/mongoose') //引用 mongoose

app.get('/', (req, res) => {
  res.render('index')
})

// 設定 handlebars
app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs'})) // 建立 hbs 模版並引入參數
app.set('view engine', 'hbs') // 啟用樣板引擎 hbs

app.listen(port, () => {
  console.log(`user-login is running on http://localhost:${port}`)
})