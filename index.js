// Initialisation du serveur
const express = require('express');
const port = 3000;
const app = express();
const games = require('./games.json');
const router = require('./modules/router');

// Moteur de rendu
app.use(express.static('public'));
app.use(router);

// Récuperer les données nécessaire pour générer dynamiquement les titres 
app.locals.games = games; // Peut etre utilisé dans les toutes les vues maintenant (locals)

app.set('view engine', 'ejs');
app.set('views', 'views');


// Serveur écoute le port
app.listen(port, () => {
    console.log("Application lancé sur le port : ", port);
});