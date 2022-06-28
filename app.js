const express = require('express')
const cors = require('cors')
const User = require('./models/user')
const Medoc = require('./models/medoc')
const mongoose = require('mongoose');
const { json } = require('body-parser');
const way = require('./router/way')
const userWay = require('./router/user')

mongoose.connect('mongodb://localhost:27017/magnificate', {useNewUrlParser: true, useUnifiedTopology: true});

db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log("connecté à Mongoose comme une mange")
});


const createUser = async studentData => {
  const user = await User.create(studentData)
  return user
 }
 
 // Récupérer un étudiant
 const findUser = async firstName => {
  const user = await User.findOne({firstName})
  User.save()
  return user
 }
 
 // Récupérer tous les étudiants
 const findUserAll = async firstName => {
  const user = await User.find({})
  return user
 }
 const findUserAllM = async firstName => {
  const user = await Medoc.find({})
  return user
 }

/*createUser({
  name: 'elie',
  mail: 'elie@test.com',
  password: 'hunumex',
})*/


//findUserAllM().then(res => console.log(res))
findUserAll().then(res => console.log(res))


const app = express()

app.use(cors())
app.use(express.json())

//route

app.use('/api/listMedoc/', way)
app.use('/api/', userWay)

module.exports = app