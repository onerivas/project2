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
    res.redirect('/movies',)
  })
})

//___________________
// movies edit
//___________________

movies.get('/:id/edit', (req, res) => {
  Movies.findById(req.params.id, (err, foundMovie) => {
    res.render('movies/edit.ejs', {movie:foundMovie,  currentUser:req.session.currentUser})
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


//___________________
// movies edit update put
//___________________

movies.put('/:id', (req,res) => {
  req.body.available === 'on' ? req.body.available = true : req.body.available = false
  Movies.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedModel) => {
    res.redirect(`/movies/${req.params.id}`)
    console.log(req.body);
  })
})

//___________________
// movies Delete
//___________________

movies.delete('/:id', (req, res) => {
  Movies.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect('/movies')
  })
})


module.exports = movies;
