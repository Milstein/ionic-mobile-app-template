'use strict';
angular.module('IonicMobileAppTemplate.Core.controllers', [])

	.controller('AppCtrl', ['$scope', function($scope){
		$scope.debug = undefined;

		hello.init({
	      facebook : '350686555119014',
	      twitter : 'U9smkVu9v8rmhtVAebAm0KFa8',
	    }, {

	      // Define the OAuth2 return URL
	      redirect_uri : 'http://127.0.0.1:8080/',
	      oauth_proxy: ' https://auth-server.herokuapp.com/proxy'
	    });
	}])

	.controller('CoreHomeCtrl', ['$scope', '$cordovaSQLite', '$localstorage', function($scope, $cordovaSQLite, $localstorage){
		$scope.debug;

		var db = $scope.db;

		$scope.facebookLogin = function() {
	      hello('facebook').login(function() {
	        hello.on('auth.login', function(auth){
	          // call user information, for the given network
	          hello( auth.network ).api( '/me' ).then( function(facebookUserObject){
	            $scope.debug = facebookUserObject;
	          });
	        });
	      });
	    };

	    $scope.twitterLogin = function() {
	      hello('twitter').login(function() {
	        hello.on('auth.login', function(auth){
	          // call user information, for the given network
	          hello( auth.network ).api( '/me' ).then( function(twitterUserObject){
	            $scope.debug = twitterUserObject;
	          });
	        });
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

	}]);