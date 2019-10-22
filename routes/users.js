const express = require('express');
const router = express.Router();
const { isNotLoggedIn } = require('../middlewares/authMiddelwares')
const User = require('../models/User')

/* GET users listing. */
router.get('/private', isNotLoggedIn, async (req, res, next) => {
  const userId = req.session.currentUser._id;
  const userPeliculas = await User.findById(userId).populate ('peliculas');
  const userActores = await User.findById(userId).populate('actores')
  res.render('private', { userActores, userPeliculas });
});



module.exports = router;
