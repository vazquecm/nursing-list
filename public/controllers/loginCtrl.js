'use strict';

app.controller("LoginCtrl", [
  '$scope', '$http', '$location',

  function($scope, $http, $location) {

    $scope.login = function() {
      console.log('put email & password in please!!!');

    $http.post('/login', {email: $scope.email, password: $scope.password}).success((response) => {
      console.log('SUCCESS');
    })

      $location.path('/checklists');
    }
  }

]);


