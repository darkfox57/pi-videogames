require('dotenv').config();
const { Router } = require('express')
const addGenres = Router()
const axios = require('axios')
const {
 API_KEY
} = process.env;
const { Genres } = require('../db')


const url = 'https://api.rawg.io/api/'

addGenres.get('/get', async (req, res) => {
 try {
  const response = await axios.get(`${url}genres${API_KEY}`);
  const genres = response.data.results.map((e) => ({ name: e.name }))
  const newGenres = [];
  for (const genre of genres) {
   const [newGenre, created] = await Genres.findOrCreate({
    where: { name: genre.name },
    defaults: genre
   });
   if (created) {
    newGenres.push(newGenre);
   }
  }

  // Obtener todos los géneros existentes en la base de datos
  const allGenres = await Genres.findAll({
   attributes: ['id', 'name']
  });

  res.status(200).json(allGenres);
 } catch (error) {
  res.status(500).send(error.message);
 }
});

module.exports = addGenres
