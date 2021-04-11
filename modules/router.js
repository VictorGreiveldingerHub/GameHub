const express = require('express');
const games = require('../games.json');
const router = express.Router();

const navLinks = () => {
    let links;
    games.forEach((link) => {
        links = link.name;
    });
    return links; // retourne /game/diceRoller
};
console.log(navLinks());

// Route racine
router.get('/', (req, res) => {
    res.render('index', {
        css: false,
    });
});

router.get('/game/diceRoller', (req, res) => {
    res.render('diceRoller', {
        css: "diceRoller",
    });
});

router.get('/game/fourchette', (req, res) => {
    res.render('fourchette', {
        css: false,
    });
});

module.exports = router;