const mongoose = require('mongoose') // 導入 mongoose
const Schema = mongoose.Schema 
const userSchema = new Schema({ // create model of mongoose schema
  firstName: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    unique: true
  }
})

module.exports = mongoose.model('Users', userSchema) 
