'use strict';

module.exports.saveToWatchlist = (req,res,next) => {
  let Movie = req.app.get('models').Movie;
  console.log(req.body);
  Movie.create(req.body).then()
    .then(res => res.status(201))
    .catch(err => err.status(501).json(err));
};

module.exports.getWatchlist = (req, res, next) => {
  // let Movie = req.app.get('models').Movie;

};