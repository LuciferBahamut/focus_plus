//\\ DEPENDENCIES //\\
const router = require('express').Router();
const multer = require('multer');
const fs = require('fs');
const exec = require('child_process').exec;

//\\ FUNCTION STOCKAGE //\\
var storage = multer.diskStorage({
    destination : function(req, file, callback) {
        fs.mkdir('./upload', function(err) { // Créer un dossier appeler upload dans le dossier courant
            if(err) {
                console.log(err.stack);
            } else {
                callback(null, './upload'); // Enregistre le ficher dans le dossier
            }
        })
    },
    filename: function(req, file, callback) { // Nomme l'image "image.png"
        callback(null, 'image.png');
    }
});


//\\ ROUTES //\\
router.post('/upload', function(req, res) { // La route upload
    var upload = multer({storage : storage}).single('image'); // Appelle la function de stockage
    upload(req, res, function(err) {
        if(err) {
            return res.end('File uploaded');
        }
        res.end('ERROR file not uploaded');
    });
    exec('sh gmic.sh /myDir'); // execute le script.sh
});

//\\ EXPORTS //\\
module.exports = router;