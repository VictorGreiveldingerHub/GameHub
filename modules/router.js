const express = require('express');
const router = express.Router();
const games = require('../games.json');

// Route racine
router.get('/', (req, res) => {
    res.render('index');
});

router.get('/game/:nomdujeu', (req, res) => {
    const nomDuJeu = req.params.nomdujeu;
    // let goodGame = false;
    // for (let game of games) {
    //     if (nomDuJeu === game.name) {
    //         goodGame = game;
    //     };
    // };

    // Bon mais pas opti
    // const goodGame = games.find((game) => {
    //     //  if (game.name === nomDuJeu) {
    //     //      return true;
    //     //  }
    //     return game.name === nomDuJeu;
    // });
    // console.log(goodGame);

    // Plus court
    const goodGame = games.find(game => game.name === nomDuJeu);

    if (goodGame){
        res.render(goodGame.name, goodGame);
    } else {
        res.status(404).render('404');
    };
});

router.get('/*', (req, res) => {
    res.status(404).render('404');
})

// router.get('/game/diceRoller', (req, res) => {
//     res.render('diceRoller', {
//         css: "diceRoller",
//     });
// });

// router.get('/game/fourchette', (req, res) => {
//     res.render('fourchette');
// });

module.exports = router;