'use strict';

app.controller("loginCtrl", [
  '$scope', '$location', function($scope, $location) {

    $scope.login = function() {
      console.log('put email in password in please!!!');

      $location.path('/checklists');
    }
  }

]);
