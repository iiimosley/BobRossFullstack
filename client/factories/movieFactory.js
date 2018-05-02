'use strict';

angular.module("MovieWatchList").factory("MovieFactory", ($http) => {

  return {
    searchAPIMovies(keyword) {
      return $http.get(`/movies?keyword=${keyword}`);
    },
    postToWatchlist(favData) {
      console.log(favData);
      return $http.post('/watchlist', favData);
    }
  };

});