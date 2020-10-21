const router = require('express').Router();
const multer = require('multer');
const fs = require('fs');
const exec = require('child_process').exec;

var storage = multer.diskStorage({
    destination : function(req, file, callback) {
        fs.mkdir('./upload', function(err) {
            if(err) {
                console.log(err.stack);
            } else {
                callback(null, './upload');
            }
        })
    },
    filename: function(req, file, callback) {
        callback(null, 'image.png');
    }
});

router.post('/upload', function(req, res) {
    var upload = multer({storage : storage}).single('image');
    upload(req, res, function(err) {
        if(err) {
            return res.end("Error uploading file.");
        }
        res.end("File is uploaded")
    });
    exec('sh test.sh /myDir');
});

module.exports = router;