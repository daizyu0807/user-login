const Users = require('../users') // DB model

const users = [
 {
   firstName: 'Tony',
   email: 'tony@stark.com',
   password: 'iamironman'
 },
 {
   firstName: 'Steve',
   email: 'captain@hotmail.com',
   password: 'icandothisallday'
 },
 {
   firstName: 'Peter',
   email: 'peter@parker.com',
   password: 'enajyram'
 },
 {
   firstName: 'Natasha',
   email: 'natasha@gamil.com',
   password: '*parol#@$!'
 },
 {
   firstName: 'Nick',
   email: 'nick@shield.com',
   password: 'password'
 }
]

const db = require('../../config/mongoose')

db.once('open', () => {
  users.forEach(user => {
    const firstName = user.firstName
    const email = user.email
    const password = user.password
    Users.create({ firstName, email, password})
  })
  console.log('Create data successfully!')
})
