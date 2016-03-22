var app = angular.module('MainApp', ['ngRoute']);

app.config([
  '$routeProvider', '$routeProvider',
  function($routeProvider, $routeProvider){

    $routeProvider
      .when('login', {
        url: '/login',
        templateUrl: '/partials/login.html',
        controller: 'loginCtrl'
      })
      .when('checklists', {
        url: '/checklists',
        templateUrl: '/partials/checklists.html',
        controller: 'checklistsCtrl'
      })
      .when('references', {
        url: '/references',
        templateUrl: '/partials/references.html',
        controller: 'referencesCtrl'
      });



      $routeProvider.otherwise('login');

  }]);
