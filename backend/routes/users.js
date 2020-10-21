const router = require('express').Router();
const multer = require('multer');

router.post('/upload', multer.any("image"), function(req, res) {
    console.log(req.body);
    const files = req.body;
    console.log(files);
    console.log("Uploaded file: ", req.file);
    //res.redirect("/");   
});

module.exports = router;