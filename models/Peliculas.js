'use strict';

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const peliculasSchema = new Schema({
  titulo: {type: String, required: true, unique: true},
  actores: {type: Array},
  anio: {type: Number},
  director: {type: String},
  genero: {type: String, enum:['comedia', 'drama', 'ciencia-ficcion', 'historica', 'aventuras', 'terror']},
});

const Peliculas = mongoose.model('Peliculas', peliculasSchema);

module.exports = Peliculas; 