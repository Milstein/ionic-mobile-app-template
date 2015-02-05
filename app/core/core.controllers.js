'use strict';
angular.module('IonicMobileAppTemplate.Core.controllers', [])

	.controller('AppCtrl', ['$scope', 'User', function($scope, User){
		$scope.debug = undefined;

		User.initSocial();

	}])

	.controller('CoreHomeCtrl', ['$scope', '$state', 'User', function($scope, $state, User){
		$scope.isFacebookSync = User.isLoggedIn('facebook');
		$scope.isTwitterSync = User.isLoggedIn('twitter');
		$scope.socialProfile = {};

		$scope.socialLogin = function(network) {
			User.socialLogin(network, function(err){
				if(err){
					console.log(err);
				} else {
					$state.go($state.current, {}, {reload: true});
				}
			});
	    };

	    $scope.viewSocialProfile = function(network) {
	    	User.getSocialProfile(network, function(err, userObject){
	    		if(err){
	    			console.log(err);
	    		} else {
	    			$scope.socialProfile = userObject;
	    		}
	    	});
	    };

	}])

	.controller('CoreSettingsCtrl', ['$scope', '$state', 'AppSettingsServ', function($scope, $state, AppSettingsServ){
		$scope.debug = undefined;
		$scope.settings = {};

		AppSettingsServ.getAllSettings(function(err, settings){
			if(err){
				$scope.debug = err;
				console.log('got err', err);
			} else {
				$scope.settings = settings;
				console.log('got settings', settings);
			}
		});

		$scope.saveSettings = function(settings){
			AppSettingsServ.setAllSettings(settings);
			console.log('settings saved');
			$state.go('app.home');
		};

		$scope.cancelSettings = function() {
			console.log('settings not saved');
			$state.go('app.home');
		};

	}])

	.controller('CoreProfileCtrl', ['$scope', '$localstorage', function($scope, $localstorage){
		$scope.debug = undefined;
		$scope.user = $localstorage.getObject('user');

	}]);