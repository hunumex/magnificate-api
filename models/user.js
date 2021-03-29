const mongoose = require('mongoose')
const muv = require('mongoose-unique-validator')

const userModel = new mongoose.Schema({
    name : {type : String, required: true},
    mail : {type : String, required: true},
    password : {type : String, required: true},
})

userModel.plugin(muv)

const User = mongoose.model('User', userModel)

module.exports = User