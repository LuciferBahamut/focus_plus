const express = require('express');
const router = express.Router();
const multer = require('multer');
const exec = require('child_process').exec;
const File = require('../model/file');
const fileCtrl = require('../controller/file');

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, cb) {
            cb(null, './files');
        },
        filename(req, file, cb) {
            cb(null, 'image.png');
        }
    }),
    /*limits: {
        fileSize: 1000000 // max file size if you want / need | the number is in bytes so 1MB = 1000000 bytes
    },*/
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpeg|jpg|png)$/)) {
            return cb(
                new Error(
                    'Envoyer seulement des images (format jpeg, jpg, png)'
                )
            );
        }
        cb(undefined, true); //continue with upload
    }
});

//\\ ROUTE POST //\\

router.post('/upload', upload.single('file'), async (req, res) => {
    try {
      //const { path, mimetype } = req.file;
      const file = new File({
        file_path: "files/images.zip",
        file_mimetype: "archive/zip"
      });
      await file.save();
      exec('sh gmic.sh /myDir');
      res.send('Votre image a bien été envoyée.');
    } catch (error) {
      res.status(400).send("Erreur pendant l'envoie. Réessayez plus tard.");
    }
  },
  (error, req, res, next) => {
    if (error) {
      res.status(500).send(error.message);
    }
  }
);

//router.post('/upload', fileCtrl.upload); I failed to transform the function upload and route post in this form.
router.get('/getAllFiles', fileCtrl.getAllFiles);
router.get('/download/:id', fileCtrl.download);

module.exports = router;