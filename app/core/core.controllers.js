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

	.controller('CoreHomeCtrl', ['$scope', function($scope){
		$scope.debug = undefined;

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

	.controller('CoreSettingsCtrl', ['$scope', function($scope){
		$scope.debug = undefined;
	}]);