'use strict'

const express = require('express');
const router = express.Router();
const Actores = require('../models/Actores.js')
const User = require('../models/User')
const parser = require('../config/cloudinary');

/* GET home page. */
router.get('/', async (req, res, next) => {
  try{
  const listaActores = await Actores.find()
  res.render('personas/listadoActores', { listaActores });
  }
  catch(error){
    next(error)
  }
});

router.get('/search', async(req, res, next) => {
  try{
    const nombre = req.query.nombre;
    const actor = await Actores.findOne({nombre})
    res.render('personas/actorDetails', actor )
  }
  catch(error){
    next(error)
  }
})


router.get('/new', (req, res, next) => {
  try{
    res.render('personas/nuevoActor');
  }
  catch(error){
    next(error);
  }
})

router.post('/', parser.single('photo'), async (req, res, next) => {
  const { nombre, nacionalidad, principalPelicula } = req.body;
  const image = req.file.secure_url
  try{
    const actor = await Actores.create({
      nombre, 
      nacionalidad, 
      principalPelicula,
      image
    });
    const actorId = actor._id;
    const userId = req.session.currentUser._id;
    await User.findByIdAndUpdate(userId, { $push: { actores: actorId } })
    res.redirect('/users/private');
  }
  catch(error){
    next(error);
  }
})

router.get('/about/:id', async (req, res, next) => {
  try{
    const id = req.params.id;
    const actor = await Actores.findById(id);
      res.render('personas/actorDetails', actor);
    }
    catch(error){
      next(error)
    }
  })   
  
  router.get('/about/:id/edit', async (req, res, next) => {
    try {
      //Rellenamos con la informacion predefinida
      const id = req.params.id
      const actor = await Actores.findById(id)
      res.render('personas/edit', actor)
    } catch (error) {
      next(error)
    }
  })
  
  router.post('/:id/', async (req, res, next) => {
    try{
      const { id } = req.params;
      const { nombre, nacionalidad, principalPelicula } = req.body;
      const update = {
        nombre: nombre,
        nacionalidad: nacionalidad,
        principalPelicula: principalPelicula
      }
      await Actores.findByIdAndUpdate(id, update, { new: true })
      res.redirect('/users/private');
    }
    catch(error){
      next(error)
    }
  })

  router.get('/about/:id/delete', async(req, res, next) => {
    try{
      const id = req.params.id;
      await Actores.findByIdAndDelete(id)
      res.redirect('/users/private');
    }
    catch(error){
      next(error)
    }
  })

  
  //Los POST van generalmente con un redirect
  module.exports = router;