// 'use strict'
// const express = require('express');
// const router = express.Router();
// const Peliculas = require('../models/Peliculas')
// const User = require('../models/User')

// router.post('/peliculas', async(req, res, next) => {
  
//   const { titulo, director, anio, actores, genero, sinopsis } = req.body;
//   try{
   
//     const pelicula = await Peliculas.create({
//       titulo,
//       director,
//       genero,
//       actores,
//       anio,
//       image,
//       sinopsis
//     });
//     const peliculaId = pelicula._id;
//     const userId = req.session.currentUser._id;
//     await User.findByIdAndUpdate(userId, { $push: { peliculas: peliculaId } })
//     res.jason(pelicula)
//   }
//   catch(error){
//     next(error)
//   }
// })


// module.exports = router;