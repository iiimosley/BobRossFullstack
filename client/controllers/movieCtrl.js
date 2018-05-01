'use strict';

angular.module("MovieWatchList").controller("MovieCtrl", function ($scope, MovieFactory) {

  $scope.searchForMovies = () =>{
    MovieFactory.searchAPIMovies($scope.keyword)
      .then(movies => {
        const movieList = movies.data.map(movie=>{
          if (movie.poster === "N/A") movie.poster= "img/no-poster.jpg";
          return movie;
        });
        $scope.movieList = movieList;
      });
  };

});