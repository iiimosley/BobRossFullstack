'use strict';

const imdb = require('imdb-api');
const key = require('../keys');

module.exports.getMoviesByKeyword = (req,res) => {
  imdb.search({ title: req.query.keyword }, { apiKey: key })
    .then(movies => res.status(200).json(movies.results));
};

