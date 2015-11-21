'use strict';

// Declare app level module which depends on views, and components
var BackbeatApp = angular.module('BackbeatApp', [
  'ngRoute',
  'BackbeatControllers',
  'BackbeatAnimations',
  'ngAria'
  // ,'BackbeatFactories'
]);

BackbeatApp.config(['$routeProvider', '$locationProvider', function($routeProvider,  $locationProvider) {
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
    // when('/title',{
    //   templateUrl: 'partials/test.html',
    //   controller: 'TitleCtrl'
    // }).
  otherwise({
    redirectTo: '/'
  });

  // Using this mode requires URL rewriting on server side, 
  // have to rewrite all your links to entry point of your application (e.g. index.html)
  $locationProvider.html5Mode(false).hashPrefix("#");
}]);
