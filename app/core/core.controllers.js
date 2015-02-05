'use strict';
angular.module('IonicMobileAppTemplate.Core.controllers', [])

	.controller('AppCtrl', ['$scope', 'User', function($scope, User){
		$scope.debug = undefined;

		User.initSocial();

	}])

	.controller('CoreHomeCtrl', ['$scope', '$state', '$stateParams', 'User', function($scope, $state, $stateParams, User){
		$scope.isFacebookSync = User.isLoggedIn('facebook');
		$scope.isTwitterSync = User.isLoggedIn('twitter');
		$scope.profileView = false;
		$scope.socialProfile = {};
		$scope.debug = 'all is good';

		$scope.socialLogin = function(network) {
			User.socialLogin(network, function(err){
				if(err){
					console.log(err);
				} else {

					if(network == 'facebook'){
						$scope.isFacebookSync = true;
					}

					if(network == 'twitter'){
						$scope.isTwitterSync = true;
					}

					$scope.$apply();
					//$state.go($state.current, {}, {reload: true});
				}
			});
	    };

	    $scope.viewSocialProfile = function(network) {
	    	$scope.debug = 'start view social profile';
	    	User.getSocialProfile(network, function(err, userObject){
	    		if(err){
	    			console.log(err);
	    		} else {
	    			$scope.debug = 'got profile for ' + network;
	    			console.log('userObject', userObject);


	    			if(network == 'facebook'){
	    				$scope.socialProfile.id = userObject.id;
	    				$scope.socialProfile.name = userObject.name;
	    				$scope.socialProfile.thumbnail = userObject.picture;
	    				$scope.socialProfile.screenName = userObject.username;
	    				$scope.socialProfile.firstName = userObject.first_name;
	    				$scope.socialProfile.lastName = userObject.last_name;
	    				$scope.socialProfile.language = userObject.locale;
	    			}

	    			if (network == 'twitter'){
	    				$scope.socialProfile.id = userObject.id;
	    				$scope.socialProfile.name = userObject.screen_name;
	    				$scope.socialProfile.thumbnail = userObject.thumbnail;
	    				$scope.socialProfile.screenName = userObject.screenName;
	    				$scope.socialProfile.firstName = userObject.first_name;
	    				$scope.socialProfile.lastName = userObject.last_name;
	    				$scope.socialProfile.language = userObject.lang;
	    			}

	    			$scope.profileView = true;
	    			$scope.$apply();
	    		}
	    	});
	    };

	   	$scope.goHome = function() {
			$state.go('app.home');
		};

		$scope.goSettings = function() {
			$state.go('app.settings');
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