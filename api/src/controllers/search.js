require('dotenv').config();
const { Router } = require('express')
const search = Router()
const axios = require('axios')
const {
 API_KEY
} = process.env;

const url = 'https://api.rawg.io/api/'

const { Genres, Videogame } = require('../db')
const { Op } = require('sequelize');

search.get('/', async (req, res) => {
 const { name } = req.query;

 try {
  // Buscar los videojuegos en la base de datos
  const dbGames = await Videogame.findAll({
   where: { name: { [Op.iLike]: `%${name}%` } },
   include: Genres,
  });

  // Buscar los videojuegos en la API externa
  const response = await axios.get(`${url}games${API_KEY}&search=${name}`);
  const apiGames = response.data.results.slice(0, 15);

  // Filtrar y formatear los videojuegos de la API
  const apiFilteredGames = apiGames.map((game) => {
   const {
    id,
    name,
    background_image: image,
    description_raw: description,
    rating,
    released: launchDate,
    platforms,
    genres,
    stores,
   } = game;

   const formattedPlatforms = platforms.map((p) => ({ name: p.platform.name }));

   const formattedGenres = genres.map((g) => ({ name: g.name }));

   return {
    id,
    name,
    image,
    description,
    rating,
    launchDate,
    platforms: formattedPlatforms,
    genres: formattedGenres,
    stores,
   };
  });

  // Combinar los videojuegos de la base de datos con los de la API
  const combinedGames = [...dbGames, ...apiFilteredGames];

  const filteredGames = combinedGames.map((game) => {
   const {
    id,
    name,
    image,
    description,
    rating,
    launchDate,
    stores,
    platforms
   } = game;

   // si el objeto proviene de la base de datos, aplicar el mapeo
   if (game instanceof Videogame) {
    const formattedPlatforms = platforms.map((p) => ({ name: p }));

    return {
     id,
     name,
     image,
     description,
     rating,
     launchDate,
     platforms: formattedPlatforms,
     genres: game.genres,
     stores,
    };
   } else {
    // si el objeto proviene de la API, devolver el objeto sin mapeo
    return {
     id,
     name,
     image,
     description,
     rating,
     launchDate,
     platforms,
     genres: game.genres,
     stores,
    };
   }
  });

  if (filteredGames.length === 0) {
   res.status(404).json({ message: 'No se encontraron resultados.' });
  } else {
   res.status(200).json(filteredGames);
  }
 } catch (error) {
  res.status(500).send(error.message);
 }
});

module.exports = search