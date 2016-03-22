'use strict';

app.controller("ReferencesCtrl", [
  '$scope', '$location', function($scope, $location) {

    $scope.references = function() {
      console.log('just at references for surgery');

      $location.path('/login');
    }
  }

]);
