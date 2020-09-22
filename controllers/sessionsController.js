const bcrypt = require('bcrypt');
const express = require('express');
const sessions = express.Router();
const User = require('../models/users.js');


sessions.get('/new', (req, res) => {
  res.render('sessions/new.ejs', {currentUser:req.session.currentUser})
});

sessions.post('/', (req, res) => {
  User.findOne({username:req.body.username}, (err, foundUser) => {
    if(err){
      console.log(err);
      res.send('oops the db had a problem')
    } else if (!foundUser){
    console.log(req.body.username);
  
      res.send('<a href="/sessions/new">Sorry! No user Found</a>')
    } else {
      if(bcrypt.compareSync(req.body.password, foundUser.password)){
        req.session.currentUser = foundUser
        // console.log(currentUser);
        console.log(req.session.currentUser._id);
        res.redirect('/')
      } else{
        res.send('<a href="/sessions/new"> password does not match')
      }
    }
  })
})


sessions.delete('/', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/')
  })
})


module.exports = sessions;
