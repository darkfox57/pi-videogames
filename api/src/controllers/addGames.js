const { Router } = require('express')
const addGame = Router()

const { Genres, Videogame } = require('../db')

addGame.post('/', async (req, res) => {

 const {
  name,
  image,
  description,
  launchDate,
  rating,
  platforms,
  genres,
 } = req.body;
 try {
  // Crear el videojuego usando el modelo Videogame
  const newVideogame = await Videogame.create({
   name,
   image,
   description,
   launchDate,
   rating: Number(rating),
   platforms,
  });

  // Buscar los géneros existentes por nombre y asociarlos al videojuego
  const existingGenres = await Genres.findAll({
   where: {
    name: genres.map((genre) => genre),
   },
  });
  await newVideogame.setGenres(existingGenres);

  res.status(201).json(newVideogame);
 } catch (error) {
  res.status(500).send(error.message);
 }
});

module.exports = addGame
