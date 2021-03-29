const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


exports.singin = (req, res) => {
    console.log(req.body)
    bcrypt.hash(req.body.password, 10)
        .then(passwordHashed => {
            const user = new User({
                name: req.body.name,
                mail: req.body.mail,
                password : passwordHashed,
            })

            user.save()
                .then(() => res.status(201).json({ msg: 'user saved'}))
                .catch(error => res.status(400).json({error}))
        })
        .catch(error => res.status(500).json({error}))
}



exports.login = (req, res) => {
    User.findOne({ name: req.body.name })
        .then(user => {
            if(!user){
                console.log(user)
                return res.status(400).json({msg : 'Utilisateur non trouvé !'})
            }
            bcrypt.compare(req.body.password, user.password)
                .then(value => {
                    if(!value) {
                        return res.json({ status: true })
                    }
                    return res.status(200).json({ 
                        userId : user._id,
                        token : jwt.sign(
                            {userId: user._id},
                            'RANDOM_SECRET_KEY',
                            { expiresIn : '24h', }
                        )
                    })

                })
                .catch(error => res.status(500).json({error}))
        })
        .catch(error => res.status(500).json({error}))
}