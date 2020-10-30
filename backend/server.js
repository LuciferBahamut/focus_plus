//\\ DEPENDENCIES //\\
const express = require('express');
const cors = require('cors');
//const moogoose = require('mongoose'); A installer si besoin

//\\ INITIALISATION //\\
const app = express(); // Utilise la librérie express
const port = process.env.PORT || 5000; // Initailise le port du server au port 5000 

app.use(cors());
app.use(express.json());

const userRouter = require('./routes/users'); // Initialise la route

app.use("/users", userRouter); // Utilise la route

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`); // Affiche dans la console le message lorsque le serveur et UP ainsi que le port qu'il utilise
});