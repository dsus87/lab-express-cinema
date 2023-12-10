const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model.js'); // path to Movie model

router.get('/', (req, res, next) => {
    Movie.find()
        .then(allTheMoviesFromDB => {
            console.log('Retrieved movies from DB:', allTheMoviesFromDB);
            res.render('movies', { Movie: allTheMoviesFromDB }); 
        })
        .catch(error => {
            console.log('Error while getting the movies from the DB: ', error);
            next(error);
        });
});

module.exports = router;

