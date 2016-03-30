'use strict';

app.controller("LoginCtrl", [
  '$scope', '$http', '$location',

  function($scope, $http, $location) {

    $scope.login = function() {
      console.log('put email & password in please!!!');
// sends login data to DOM //
    $http.post('/login', {
      email: $scope.email,
      password: $scope.password
    })
    .then(function(res) {
      console.log(res);
    })
// after login is complete, redirects user to the checklist page //
      $location.path('/checklists');
    }
  }

]);


