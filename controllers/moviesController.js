const express =  require('express');
const Movies = require('../models/movies.js');
const movies = express.Router()
const moviesSeed = require('../models/moviesSeed.js')


const isAuthorized = (req, res, next) => {
  req.session.currentUser ? next() : res.redirect('/sessions/new');
}

//___________________
// movies seed
//___________________
movies.get('/seed', (req, res) => {
  Movies.create(moviesSeed, (err, data) => {
    res.redirect('/movies')
  })
})

//___________________
// movies show
//___________________

movies.get('/:id', (req, res ) => {
  Movies.findById(req.params.id, (err, foundMovie) => {
    res.render('movies/show.ejs', {
      movie:foundMovie,
      currentUser:req.session.currentUser
    })
  })
})






//___________________
// movies index
//___________________



movies.get('/', (req, res) => {
  Movies.find({}, (err, allMovies) => {
    res.render('movies/index.ejs', {
      movies: allMovies,
      currentUser: req.session.currentUser
    })
  })
})









module.exports = movies;
