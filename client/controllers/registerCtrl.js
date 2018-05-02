'use strict';

angular.module("MovieWatchList").controller("RegisterCtrl", function ($scope, $location, RegisterFactory) {

  $scope.account = {};

  $scope.submitUser = () => {
    $scope.errMsg = "";
    if ($scope.account.password === $scope.account.confirm){
      RegisterFactory.registerUser($scope.account).then(()=>{
        $location.path("/movies");
      });
    } else {
      console.log('nope');
      $scope.errMsg = "Please enter matching passwords";
    }
  };

  $scope.login = () => {
    RegisterFactory.loginUser($scope.account).then(() => {
      console.log("logged in controller", RegisterFactory.getCurrentUser());
      $location.path("/movies");
    });
  };
  
});