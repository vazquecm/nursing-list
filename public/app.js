var app = angular.module('MainApp', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('/login', {
        url: '/login',
        templateUrl: './partials/login.html',
        controller: 'LoginCtrl'
      })
      .state('/checklists', {
        url: '/checklists',
        templateUrl: './partials/checklists.html',
        controller: 'ChecklistsCtrl'
      })
      .state('/procedures', {
        url: '/procedures',
        templateUrl: './partials/procedures.html',
        controller: 'ProceduresCtrl'
      })
      $urlRouterProvider.otherwise('/login');

  }]);
