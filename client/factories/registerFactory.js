'use strict';

angular.module("MovieWatchList").factory("RegisterFactory", ($http) => {
  
  let currentUser = null;

  return {
    registerUser(account){
      console.log(account);
      return $http.post('/register', account).then(userData=>{
        currentUser = userData;
        return userData.data;
      });
    },

    getCurrentUser(){
      return currentUser;
    }
  };

});