const express = require('express')
const exphbs = require('express-handlebars')
const routes = require('./routes')

const cookieParser = require('cookie-parser')

const app = express()
const port = 3000

require('./config/mongoose') //引用 mongoose

app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(routes)

// 設定 handlebars
app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs'})) // 建立 hbs 模版並引入參數
app.set('view engine', 'hbs') // 啟用樣板引擎 hbs

app.listen(port, () => {
  console.log(`user-login is running on http://localhost:${port}`)
})