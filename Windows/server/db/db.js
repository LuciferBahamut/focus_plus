// This file is here if you use a Database for this project (MongoDB more exactly)

const mongoose = require('mongoose');

//const uri = 'mongodb+srv://User_test:User_test@cluster0.huyln.mongodb.net/Focus+?retryWrites=true&w=majority';
const uri = "mongodb://localhost:27017/focus";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});
const db = mongoose.connection; // Connection avec la base de donnée MongoDB
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log("MongoDB database connection established successfully"); //Affiche dans la console le message si dessus si la connection s'effectue
});