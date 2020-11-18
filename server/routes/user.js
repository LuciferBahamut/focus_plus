const express = require('express');
const router = express.Router();
//const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../model/user');

router.post('/signup', async(req, res) => {
    console.log(req.body.username);
    try {
    const { username, password } = req.body;
//    bcrypt.hash(password, 10);
    const user = new User({
        username,
        password,
    });
        await user.save();
        res.send('Votre compte utilisateur a bien été créer.');
} catch(error) {
    res.status(400).send('Erreur lors de la création de votre compte utilisateur. Réessayez plus tard.');
}
},
(error, req, res, next) => {
    if (error) {
        res.status(500).send(error.message);
    }
});

router.post('/login', async(req, res) => {
    User.findOne({ username: req.body.username })
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