'use strict';

// Declare app level module which depends on views, and components
angular.module('profecoApp', [
  'ngRoute',
  'profecoApp.avisameListado',
  'profecoApp.avisameFormulario'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/avisameListado'});
}]);

//Variables de controladores
var avisame = null;
