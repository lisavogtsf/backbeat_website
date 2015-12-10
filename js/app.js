'use strict';

// Declare app level module which depends on views, and components
var BackbeatApp = angular.module('BackbeatApp', [
  'ngRoute',
  'BackbeatControllers',
  'ngAria'
]);

BackbeatApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'partials/home.html',
      controller: 'HomeCtrl'
    }).
    when('/about', {
      templateUrl: 'partials/about.html',
      controller: 'AboutCtrl'
    }).
    when('/contact',{
      templateUrl: 'partials/contact.html',
      controller: 'ContactCtrl'
    }).
  otherwise({
    redirectTo: '/'
  });
}]);
