const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model.js'); 

router.get('/movie/:movieId', (req, res, next) => {
    const movieId = req.params.movieId;

    Movie.findOne({_id: movieId})
    .then(movie => {
        console.log('movie', movie);
        res.render('movie-detail', { movie: movie });
      })
      .catch(err => console.log(err))

});

module.exports = router;