const router = require('express').Router();
const { response } = require('express');
const FormData = require('form-data');
const sharp = require('sharp');

router.route('/upload').post((req, res) => {
    console.log(req.body);
    const files = req.body;
    console.log(files);
    const formData = new FormData(req.body);
    console.log(formData);
    console.log(formData.value);
    sharp(files).toFile('./test.png', function(err, info){
        res.send(response);
    });
    console.log("END OF THE ROUTE");
});

module.exports = router;