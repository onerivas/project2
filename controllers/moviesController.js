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
// movies add new
//___________________

movies.get('/new', isAuthorized, (req, res) => {
  res.render('movies/new.ejs', {currentUser:req.session.currentUser})
})



//___________________
// movies edit
//___________________

movies.get('/:id/edit', isAuthorized, (req, res) => {
  Movies.findById(req.params.id, (err, foundMovie) => {
    res.render('movies/edit.ejs', {movie:foundMovie,  currentUser:req.session.currentUser})
  })
})


//___________________
// movies show
//___________________

movies.get('/:id', isAuthorized, (req, res ) => {
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



movies.get('/', isAuthorized, (req, res) => {
  Movies.find({user:req.session.currentUser._id}, (err, foundMovies) => {
    res.render('movies/index.ejs', {
      movies: foundMovies,
      currentUser: req.session.currentUser
    })
  })
})


//___________________
// movies edit update put
//___________________

movies.put('/:id', (req,res) => {
  req.body.lentOut === 'on' ? req.body.lentOut = true : req.body.lentOut = false
  req.body = {
    user: req.session.currentUser._id,
    title: req.body.title,
    description: req.body.description,
    genres: req.body.genres,
    rated: req.body.rated,
    runTime: req.body.runTime,
    moviePoster: req.body.moviePoster,
    lentOut: req.body.lentOut,
    lentOutTo: req.body.lentOutTo
  }
  Movies.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedModel) => {
    res.redirect(`/movies/${req.params.id}`)
    console.log(req.body);
  })
})

//___________________
// movies create post
//___________________

movies.post('/', (req, res) => {
  currentUser: req.session.currentUser
  req.body.lentOut === 'on' ? req.body.lentOut = true : req.body.lentOut = false
  req.body = {
    user: req.session.currentUser._id,
    title: req.body.title,
    description: req.body.description,
    genres: req.body.genres,
    rated: req.body.rated,
    runTime: req.body.runTime,
    moviePoster: req.body.moviePoster,
    lentOut: req.body.lentOut,
    lentOutTo: req.body.lentOutTo
  }
  Movies.create(req.body, (err, createdMovie) => {
    res.redirect('/movies')
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
