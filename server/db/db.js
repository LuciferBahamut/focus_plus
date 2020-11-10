// This file is here if you use a Database for this project (MongoDB more exactly)

const mongoose = require('mongoose'); //execute npm install mongoose because it's not installed !

const uri = 'mongodb+srv://User_test:User_test@cluster0.huyln.mongodb.net/Focus+?retryWrites=true&w=majority';
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});
const connection = mongoose.connection; // Connection avec la base de donnée MongoDB
connection.once('open', () => {
    console.log("MongoDB database connection established successfully"); //Affiche dans la console le message si dessus si la connection s'effectue
});