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

    loginUser(userObj) {
      return $http.post("/login", userObj).then(user => {
        currentUser = user.data;
      });
    },

    getCurrentUser(){
      return currentUser;
    }
  };

});