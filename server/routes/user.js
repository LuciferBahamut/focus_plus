const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../model/user');

//\\ ADD SECURITY AT THESE ROUTES //\\

router.post('/signup', async(req, res) => {
    try {
    const { username, password } = req.body;
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
    const password = req.body.password;
    try {
        const user = await User.findOne({username: req.body.username});
        await User.findOne({username: req.body.username})
        .then(user => {
            if(!user) { // FIX NOT VERY FONCTIONAL
                console.log("ERREUR IS HERE !!!");
                res.status(401).send("Cet utilisateur n'existe pas.");    
            }
        })
        if(password === user.password) { // add message to user if he connect or not
                res.status(200).json({
                    userId: user._id,
                    token: jwt.sign(
                        { userId: user.__id }, 
                        'RANDOM_TOKEN_SECRET',
                        { expiresIn: '24h' }
                    )
                });
                console.log("USER CONNECTED");
            } else {
                res.status(401).send('Mot de passe incorrect.');
            }
    } catch(error) {
            res.status(400).send('Utilisateur ou mot de passe invalide. Veuillez réessayez.');
        }
});

module.exports = router;