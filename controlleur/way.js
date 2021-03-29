const User = require('../models/user')

exports.updateMedoc = (req, res) => {
    User.updateOne({ _id : req.params.id}, {...req.body, _id: req.params.body})
    .then(() => res.status(201).json({msg : 'modification fait', status: true}))
    .catch(error => res.status(401).json({ error}))
} 