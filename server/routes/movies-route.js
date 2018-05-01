'use strict';

const { Router } = require('express');
const router = Router();
const {getMoviesByKeyword} = require('../controllers/moviesCtrl');

router.get('/movies', getMoviesByKeyword);

module.exports = router;