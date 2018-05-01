'use strict';

angular.module('MovieWatchList', ['ngRoute']).config($routeProvider => {
  $routeProvider
    .when('/test', {
      templateUrl: 'partials/test.html',
      controller: 'TestCtrl'
    })
    .when("/movies", {
      templateUrl: "partials/movies.html",
      controller: "MovieCtrl"
    })
    .when("/register", {
      templateUrl: "partials/register.html",
      controller: "RegisterCtrl"
    });
});