const express = require('express')
const Medoc = require('../models/medoc')
const way = express.Router()
const ctrlWay = require('../controlleur/way')

way.get('/', (req, res) => {
    Medoc.find()
      .then(data => res.status(200).json({data}))
      .catch(error => res.status(400).json({error})) 
})

way.post('/add', (req, res) => {
    console.log(req.body)
    const medoc = new Medoc({
      ...req.body
    })
  
    medoc.save()
      .then(() => res.status(201).json({msg: 'enregistrement reussi', status: true}))
      .catch(error => res.status(400).json({error}))
  })

way.put('/:id', ctrlWay.updateMedoc)
way.delete('/:id', (req, res) => {
  Medoc.deleteOne({_id: req.params.id})
    .then(() => res.status(200).json({ msg: 'medicament bien supprime' }))
    .catch(error => res.status(400).json({ error }))
})

module.exports = way