const express = require('express');
const TvShows = require('../models/tvShows.js');
const tvShows = express.Router();
const tvShowsSeed = require('../models/tvShowsSeed.js');


const isAuthorized = (req, res, next) => {
  req.session.currentUser ? next() : res.redirect('/sessions/new')
};


//___________________
// tvShows seed
//___________________
tvShows.get('/seed', (req, res) => {
  TvShows.create(tvShowsSeed, (err, data) => {
    res.redirect('/tvShows',)
  })
})










module.exports = tvShows;
