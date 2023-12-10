// Define our Movie model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const movieSchema = new Schema({
  title: { type: String, required: true },
  director: { type: String, required: true },
  stars: [String], // Array of strings
  image: String, // URL to the image
  description: String,
  showtimes: [String] // Array of strings for showtimes
});

// Create Model from Schema
const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;