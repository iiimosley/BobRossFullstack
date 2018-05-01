'use strict';

angular.module("MovieWatchList").controller("RegisterCtrl", function ($scope, RegisterFactory) {

  $scope.account = {};

  $scope.submitUser = () => {
    $scope.errMsg = "";
    if ($scope.account.password === $scope.account.confirm){
      RegisterFactory.registerUser($scope.account);
    } else {
      console.log('nope');
      $scope.errMsg = "Please enter matching passwords";
    }
  };

});