'use strict';
angular.module('IonicMobileAppTemplate.Module.controllers', [])

	.controller('ModuleBaseCtrl', ['$scope', '$state', function($scope, $state){
		$scope.debug = undefined;

	   	$scope.goHome = function() {
			$state.go('app.home');
		};

		$scope.goSettings = function() {
			$state.go('app.settings');
		};
	}]);