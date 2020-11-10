const express = require('express');
const Movies = require('../models/movies.js');
const TvShow = require('../models/tvShows.js');
const home = express.Router()

//___________________
// home index
//___________________
home.get('/', (req, res) => {
  Movies.find({}, (err, allMovies) => {
    res.render('home/index.ejs', {
      currentUser: req.session.currentUser,
      movies: allMovies
    })
  })
})



module.exports = home
