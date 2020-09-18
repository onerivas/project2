const mongoose = require('mongoose');

const moviesSchema = new mongoose.Schema(
  {
  title: {type:String, required: true},
  description: {type:String, required: true},
  genres: {type: String, required: true},
  rated: {type: String, required: true},
  runTime: {type: Number, required: true},
  moviePoster: String,
  available: Boolean
}
)
 const Movie = mongoose.model('Movies', moviesSchema)

module.exports = Movie
