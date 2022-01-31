const mongoose = require('mongoose')

// 設定資料庫路徑
mongoose.connect('mongodb://localhost/user-login')

// 資料庫連線狀態
const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected')
})

module.exports = db