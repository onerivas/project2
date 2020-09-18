const express = require('express');
const Movies = require('../models/movies.js');
const TvShow = require('../models/tvShows.js');
const home = express.Router()


const isAuthorized = (req, res, next) => {
  req.session.currentUser ? next() : res.redirect('/sessions/new')
}


//___________________
// home index
//___________________
home.get('/', (req, res) => {
  res.render('home/index.ejs', {
    currentUser: req.session.currentUser
  })
})



module.exports = home
