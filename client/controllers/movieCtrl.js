'use strict';

angular.module("MovieWatchList").controller("MovieCtrl", function ($scope, MovieFactory, RegisterFactory) {

  $scope.searchForMovies = () =>{
    MovieFactory.searchAPIMovies($scope.keyword)
      .then(movies => {
        const movieList = movies.data.map(movie=>{
          if (movie.poster === "N/A") movie.poster= "img/no-poster.jpg";
          return movie;
        });
        $scope.movieList = movieList;
        console.log($scope.movieList[0]);
      });
  };

  $scope.addToWatchlist = (imdbID) => {
    let faveMovie = {};
    faveMovie.user_id = RegisterFactory.getCurrentUser().id;
    faveMovie.imdb_id = imdbID;
    faveMovie.rating = null;
    MovieFactory.postToWatchlist(faveMovie);
    // .then(foodata => {
    //   console.log(foodata);
    // });
  };

  $scope.currentUser = () => {
    return RegisterFactory.getCurrentUser().id;
  };

});