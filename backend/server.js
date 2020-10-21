const express = require('express');
const cors = require('cors');
const moogoose = require('mongoose');
const multer = require('multer');
const fs = require('fs');
const exec = require('child_process').exec;

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//const userRouter = require('./routes/users');

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

app.post('/users/upload', function(req, res) {
    var upload = multer({storage : storage}).single('image');
    upload(req, res, function(err) {
        if(err) {
            return res.end("Error uploading file.");
        }
        res.end("File is uploaded")
    });
    exec('sh test.sh /myDir');
});


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});