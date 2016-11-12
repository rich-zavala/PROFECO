'use strict';

angular.module('profecoApp.avisameListado', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	console.log($routeProvider);
  $routeProvider.when('/avisameListado', {
    templateUrl: 'libraries/views/avisame/listado.html',
    controller: 'AvisameListadoCtrl'
  });
}])

.controller('AvisameListadoCtrl', ['$scope', function($scope) {
	$scope.items = [];
	for(var i in catalogo)
		if(catalogo[i].id > 100)
			$scope.items.push(catalogo[i]);

	$scope.avisameSetItem = function(item){
		avisame = item;
	}
}]);
