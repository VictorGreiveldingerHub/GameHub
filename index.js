// Initialisation du serveur
const express = require('express');
const port = 3000;
const app = express();

// Moteur de rendu
app.use(express.static('assets'));

app.set('view engine', 'ejs');
app.set('views', 'views');

// Route racine
app.get('/', function(req, res) {
    res.render('index');
});

app.get('/diceroller', function(req, res) {
    res.render('diceRoller');
});

app.get('/fourchette', function(req, res) {
    res.render('fourchette');
});


// Serveur écoute le port
app.listen(port, () => {
    console.log("Application lancé sur le port : ", port);
});