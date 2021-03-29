const express = require('express')
const userWay = express.Router()
const cookie = require('cookie-parser')
const User = require('../models/user')


const userControlleur = require('../controlleur/user')

userWay.use(cookie())
userWay.post('/singin', userControlleur.singin)
userWay.post('/login', userControlleur.login)
userWay.get('/showCompt', (req, res) => {
    User.find()
    .then(r => res.status(200).json({ r }))
    .catch(error => res.status(400).json({ error }))
})

module.exports = userWay