const path = require('path');
const File = require('../model/file');

//\\ ROUTE GET //\\

exports.getAllFiles = async (req, res) => {
    try {
        const files = await File.find({});
        const sortedByCreationDate = files.sort(
            (a, b) => b.createAt - a.createAt
        );
        res.send(sortedByCreationDate);
    } catch (error) {
        res.status(400).send('Erreur pendant la récupération des images. Réeesayez plus tard.');
    }
};

exports.download = async (req, res) => {
    try {
        const file = await File.findById(req.params.id);
        res.set({
            'Content-Type': file.file_minetype
        });
        res.sendFile(path.join(__dirname, '..', file.file_path));
    } catch (error) {
        res.status(400).send('Erreur pendant le téléchargement. Réessayez plus tard.');
    }
};