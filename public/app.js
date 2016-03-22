var app = angular.module('MainApp', ['ngRoute']);

app.config(function($routeProvider) {

    $routeProvider
      .when('/login', {
        templateUrl: './partials/login.html',
        controller: 'LoginCtrl'
      })
      .when('/checklists', {
        templateUrl: './partials/checklists.html',
        controller: 'ChecklistsCtrl'
      })
      .when('/references', {
        templateUrl: './partials/references.html',
        controller: 'ReferencesCtrl'
      })
      .otherwise({
        redirectTo: '/login'
      });

  });
