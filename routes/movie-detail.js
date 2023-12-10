const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model.js'); 

router.get('/movies/:movieId', (req, res, next) => {
    const movieId = req.params.movieId;

    Movie.findById(movieId)
    .then(movie => {
        console.log('movie', movie);
        res.render('movie-detail', { movie: movie });
      })
      .catch(err => console.log(err))

});

module.exports = router;


