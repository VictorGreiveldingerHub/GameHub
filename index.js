// Initialisation du serveur
const express = require('express');
const port = 3000;
const app = express();
const games = require('./games.json');
const router = require('./modules/router');

// Moteur de rendu
app.use(express.static('public'));
app.use(router);

app.set('view engine', 'ejs');
app.set('views', 'views');


// const cssForDice = () => {
//     let cssDice;
//     for (let game of games) {
//         cssDice = `${game.cssFile}`;
//         cssDice.substr(4);
//     };
//     return cssDice; // retourne diceRoller.css
// };

// Serveur écoute le port
app.listen(port, () => {
    console.log("Application lancé sur le port : ", port);
});