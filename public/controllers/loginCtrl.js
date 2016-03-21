'use strict';

app.controller("LoginCtrl", [
  '$scope', '$location', function($scope, $location) {

    $scope.login = function() {
      console.log('put email in password in please!!!');

      $location.path('/checklists');
    }
  }

]);
