const mongoose = require('mongoose')

const medocShema = new mongoose.Schema({
    name : {type: String, required: true},
    type : {type: String, required: true},
    unite : {type: Number, required: true},
    prix : {type: Number, required: true},
    qt : {type: Number, required: true}
})

const Schema = mongoose.model('Medoc', medocShema)

module.exports = Schema