const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const allGames = require('../controllers/games')
const addGames = require('../controllers/addGames')
const addGenres = require('../controllers/genres')
const search = require('../controllers/search');
const gameId = require('../controllers/gameid');



const router = Router();

// Middleware para manejar solicitudes sin query
router.use('/videogames', (req, res, next) => {
 if (!Object.keys(req.query).length) {
  allGames(req, res, next); // Si no hay query, maneja la solicitud con allGames
 } else {
  next(); // Si hay query, pasa la solicitud al siguiente middleware
 }
});

// Middleware para manejar solicitudes con query
router.use('/videogames', search); // http://localhost:3001/videogames/?name=juego


router.use('/videogames/addgame', addGames) // http://localhost:3001/videogames/addgame
router.use('/videogame', gameId) // http://localhost:3001/game/:id
router.use('/genres', addGenres) // http://localhost:3001/genres/get

module.exports = router;
