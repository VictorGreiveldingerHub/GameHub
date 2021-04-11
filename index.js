// Initialisation du serveur
const express = require('express');
const port = 3000;
const app = express();
const router = require('./modules/router');

// Moteur de rendu
app.use(express.static('public'));
app.use(router);

app.set('view engine', 'ejs');
app.set('views', 'views');


// Serveur écoute le port
app.listen(port, () => {
    console.log("Application lancé sur le port : ", port);
});