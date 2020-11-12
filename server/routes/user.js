const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../model/user');

router.post('/signup', async(req, res) => {
    const { username, password } = req.file;
    bcrypt.hash(password, 10)
    .then(hash => {
        const user = new User({
            username: username,
            password: hash
        });
        user.save()
        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
});

router.post('/login', async(req, res) => {
    const { username, password } = req.file;
    User.findOne({ username: username})
    .then(user => {
        if (!user) {
            return res.status(401).json({ error: 'Utilisateur non trouvé ! '});
        }
        bcrypt.compare(password, user.password)
        .then(valid => {
            if (!valid) {
                return res.status(401).json({ error: 'Mot de passe incorect !' });
            }
            res.status(200).json({
                userId: user._id,
                token: jwt.sign(
                    { userId: user.__id }, 
                    'RANDOM_TOKEN_SECRET',
                    { expiresIn: '24h' }
                )
            });
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
});

module.exports = router;