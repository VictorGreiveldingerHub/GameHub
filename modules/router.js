const express = require('express');
const router = express.Router();

// Route racine
router.get('/', (req, res) => {
    res.render('index');
});

router.get('/game/diceRoller', (req, res) => {
    res.render('diceRoller');
});

router.get('/game/fourchette', (req, res) => {
    res.render('fourchette');
});

module.exports = router;