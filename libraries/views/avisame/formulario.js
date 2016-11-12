'use strict';

angular.module('profecoApp.avisameFormulario', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	console.log($routeProvider);
  $routeProvider.when('/avisameFormulario', {
    templateUrl: 'libraries/views/avisame/formulario.html',
    controller: 'AvisameFormularioCtrl'
  });
}])

.controller('AvisameFormularioCtrl', ['$scope', function($scope) {

}]);
