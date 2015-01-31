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
		$scope.user;
		$scope.query;
		$scope.result;

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

		$scope.insert = function(firstname, lastname) {
	        var query = "INSERT INTO people (firstname, lastname) VALUES (?,?)";
	        $cordovaSQLite.execute(db, query, [firstname, lastname]).then(function(res) {
	            $scope.result = res.insertId;
	            console.log("INSERT ID -> " + res.insertId);
	        }, function (err) {
	        	$scope.result = err;
	            console.error(err);
	        });
	    }
	 
	    $scope.select = function(lastname) {
	        var query = "SELECT firstname, lastname FROM people WHERE lastname = ?";
	        $cordovaSQLite.execute(db, query, [lastname]).then(function(res) {
	            if(res.rows.length > 0) {
	            	$scope.result = {firstname: res.rows.item(0).firstname, lastname: res.rows.item(0).lastname};
	                console.log("SELECTED -> " + res.rows.item(0).firstname + " " + res.rows.item(0).lastname);
	            } else {
	            	$scope.result = "No results found";
	                console.log("No results found");
	            }
	        }, function (err) {
	        	$scope.result = err;
	            console.error(err);
	        });
	    }

	}])

	.controller('CoreSettingsCtrl', ['$scope', function($scope){
		$scope.debug = undefined;
	}]);