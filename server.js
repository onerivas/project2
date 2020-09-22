//___________________
//Dependencies
//___________________
const express = require('express');
const session = require('express-session')
const methodOverride  = require('method-override');
const mongoose = require ('mongoose');
const app = express ();
const db = mongoose.connection;
require('dotenv').config();
//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT;

//___________________
//Database
//___________________
// How to connect to the database via heroku
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to Mongo &
// Fix Depreciation Warnings from Mongoose
mongoose.connect(MONGODB_URI , { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true, }
);


db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

//___________________
//Middleware
//___________________


app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(methodOverride('_method'));
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false
}))

//___________________
// Controllers
//___________________
const homeController = require('./controllers/homeController.js');
app.use('/home', homeController);
const moviesController = require('./controllers/moviesController.js');
app.use('/movies', moviesController);
// const tvShowsController = require('./controllers/tvShowsController.js');
// app.use('/tvShows', tvShowsController);
const usersController = require('./controllers/usersController.js');
app.use('/users', usersController);
const sessionsController = require('./controllers/sessionsController.js');
app.use('/sessions', sessionsController)


//___________________
// Routes
//___________________
//localhost:3000
app.get('/' , (req, res) => {
  res.redirect('/home')
});

//___________________
//Listener
//___________________
app.listen(PORT, () => console.log( 'Listening on port:', PORT));
