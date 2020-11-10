const mongoose = require("mongoose");
const User = require("../models/users.js");
const moviesSchema = new mongoose.Schema({
  user: String,
  title: { type: String, required: true },
  description: { type: String, required: true },
  genres: { type: String, required: true },
  rated: { type: String, required: true },
  runTime: { type: Number, required: true },
  moviePoster: String,
  lentOut: Boolean,
  lentOutTo: String,
});
const Movie = mongoose.model("Movies", moviesSchema);

module.exports = Movie;
