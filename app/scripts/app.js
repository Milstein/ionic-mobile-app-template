'use strict';
// Ionic Starter App, v0.9.20

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('IonicMobileAppTemplate', ['ionic', 'config', 
  'IonicMobileAppTemplate.Core.controllers','IonicMobileAppTemplate.Module.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'core/core.view.sidemenu.html',
      controller: 'AppCtrl'
    })

    .state('app.home', {
      url: '/home',
      views: {
        'menuContent' :{
          templateUrl: 'core/core.view.home.html',
          controller: 'CoreHomeCtrl'
        }
      }
    })

    .state('app.settings', {
      url: '/settings',
      views: {
        'menuContent' :{
          templateUrl: 'core/core.view.settings.html',
          controller: 'CoreSettingsCtrl'
        }
      }
    })

    .state('app.module', {
      url: '/module',
      views: {
        'menuContent' :{
          templateUrl: 'module/module.view.base.html',
          controller: 'ModuleBaseCtrl'
        }
      }
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});

