'use strict';

app.controller("checklistsCtrl", [
  '$scope', '$location', function($scope, $location) {

    $scope.checklists = function() {
      console.log('just checking the list');

      $location.path('/references');
    }
  }

]);
