const bcrypt = require('bcrypt');
const express = require('express');
const users = express.Router();
const User = require('../models/users.js');


// user form
users.get('/new', (req, res) => {
  res.render('users/new.ejs', {currentUser:req.session.currentUser})
})

// create a new user
users.post('/', (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
  User.create(req.body, (err, createdUser) => {
    console.log(err);
    console.log(req.body);
    console.log(createdUser);
    console.log('user was created', createdUser);
    res.redirect('/')
  })
})

module.exports = users
