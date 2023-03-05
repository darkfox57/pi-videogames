require('dotenv').config();
const { Router } = require('express')
const allGames = Router()
const axios = require('axios')
const {
 API_KEY
} = process.env;
const { Genres, Videogame } = require('../db')


const url = 'https://api.rawg.io/api/'


allGames.get('/', async (req, res) => {
 try {
  const games = [];

  // Obtener los juegos de la base de datos
  const dbGames = await Videogame.findAll({
   include: Genres
  });

  // Filtrar los juegos de la base de datos
  const filteredDbGames = dbGames.map((game) => {
   const {
    id,
    name,
    description,
    releaseDate,
    rating,
    platforms,
    genres
   } = game;

   const filteredPlatforms = platforms.map((platform) => {
    return { name: platform };
   });

   const filteredGenres = genres.map((genre) => {
    return { name: genre.name };
   });

   return {
    id,
    name,
    description,
    releaseDate,
    rating,
    platforms: filteredPlatforms,
    genres: filteredGenres,
   };
  });

  // Obtener los juegos de la API externa
  let response = await axios.get(`${url}games${API_KEY}`);
  let apiGames = response.data.results;
  let nextPageUrl = response.data.next;

  // Iterar sobre las páginas de la API externa
  while (games.length < 100 && nextPageUrl) {
   // Filtrar la información requerida de cada juego
   for (let game of apiGames) {
    const {
     id,
     name,
     background_image: image,
     description_raw: description,
     rating,
     released: releaseDate,
     platforms,
     genres,
     stores,
    } = game;

    const filteredPlatforms = platforms.map((platform) => {
     return { name: platform.platform.name };
    });

    const filteredGenres = genres.map((genre) => {
     return { name: genre.name };
    });

    const filteredGame = {
     id,
     name,
     image,
     description,
     rating,
     releaseDate,
     platforms: filteredPlatforms,
     genres: filteredGenres,
     stores: stores,
    };

    games.push(filteredGame);

    if (games.length === 100) break;
   }

   // Obtener los juegos de la siguiente página
   if (games.length < 100 && nextPageUrl) {
    response = await axios.get(nextPageUrl);
    apiGames = response.data.results;
    nextPageUrl = response.data.next;
   }
  }

  // Concatenar los juegos de la base de datos con los de la API
  const combinedGames = filteredDbGames.concat(games);
  res.status(200).json(combinedGames);
 } catch (error) {
  res.status(500).send(error.message);
 }
});

module.exports = allGames;