const mongoose = require('mongoose');

const tvShowsSchema = new mongoose.Schema(
  {
  title: {type:String, required: true},
  genres: {type: String, required: true},
  rated: {type: String, required: true},
  numberOfEpisodes: {type: Number, required: true},
  episodeRunTime: {type: Number, required: true},
  available: Boolean
}
)
 const TvShow = mongoose.model('tvShows', tvShowsSchema)

module.exports = TvShow
