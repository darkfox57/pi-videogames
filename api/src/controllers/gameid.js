require('dotenv').config();
const { Router } = require('express')
const gameId = Router()
const axios = require('axios')
const {
 API_KEY
} = process.env;

const url = 'https://api.rawg.io/api/'
const { Videogame } = require('../db')

gameId.get('/:id', async (req, res) => {
 try {
  const gameId = req.params.id;
  let filteredGame;
  //si le id pertenece a la bd busca y trae la informacion de la base de datos
  if (gameId.includes('-')) {
   const dbGame = await Videogame.findOne({ where: { id: gameId } });
   if (!dbGame) {
    return res.status(404).json({ message: `Game with id ${gameId} not found in database` });
   }
   const genres = await dbGame.getGenres();
   filteredGame = {
    id: dbGame.id,
    name: dbGame.name,
    image: dbGame.image,
    description: dbGame.description,
    launchdate: dbGame.launchDate,
    platforms: dbGame.platforms.map((p) => ({ 'name': p })),
    genres: genres.map((genre) => ({ name: genre.name })),
    rating: dbGame.rating,
   };
  } else {
   //si el id es de la api busca la informacion en la api y la organiza
   const response = await axios.get(`${url}games/${gameId}${API_KEY}`);
   //get galeria de imagenes del juego
   const images = await axios.get(`${url}games/${gameId}/screenshots${API_KEY}`)
   //get galeria de trailers del juego
   const videos = await axios.get(`${url}games/${gameId}/movies${API_KEY}`)
   const gallery = images.data.results.map((i) => i.image)
   const trailers = videos.data.results.map((v) => {
    return {
     media: v.data.max,
     cover: v.preview
    }
   })
   // Desestructura la data que viene de la peticion de la api en un objeto
   const {
    id,
    name,
    background_image: image,
    description_raw: description,
    released: launchdate,
    platforms,
    genres,
    stores,
    rating,
    ratings_count,
    requirements_en: requirements,
    tags,
    esrb_rating,
   } = response.data;
   //organiza la informacion que se envia al front independiente de si es de la base de datos o de la api
   filteredGame = {
    id,
    name,
    image,
    description,
    launchdate,
    platforms: platforms.map((p) => ({ "name": p.platform.name })),
    genres: genres.map((g) => ({ "name": g.name })),
    stores: stores.map((s) => ({ "name": s.store.name })),
    rating,
    ratings_count,
    requirements: requirements?.en,
    tags: tags.map((t) => t.name),
    esrb_rating,

    short_screenshots: gallery,
    trailers,
   };
  }

  res.status(200).json(filteredGame);
 } catch (error) {
  res.status(500).send(error.message);
 }
});


module.exports = gameId





















