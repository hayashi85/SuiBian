// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

// default ionic module
var modules = new Array();
modules.push('ionic');

// append controllers here
modules.push('starter.controllers');
modules.push('starter.controller.about');
modules.push('starter.controller.login');
modules.push('starter.controller.logout');
modules.push('starter.controller.home');
modules.push('starter.controller.scan');
modules.push('starter.controller.map');
modules.push('starter.controller.menu');
modules.push('starter.controller.geomap');
modules.push('starter.controller.tab.home');
modules.push('starter.controller.tab.category');
modules.push('starter.controller.tab.filter');


// append services here
modules.push('starter.services');
modules.push('starter.service.users');
modules.push('starter.service.camera');
modules.push('starter.service.services');
modules.push('starter.service.categories');

angular.module('starter', modules)

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
      url: '/dash',
      views: {
          'tab-dash': {
              templateUrl: 'templates/tab-dash.html',
              controller: 'DashCtrl'
          }
      }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
          'tab-chats': {
              templateUrl: 'templates/tab-chats.html',
              controller: 'ChatsCtrl'
          }
      }
  })

  .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
          'tab-chats': {
              templateUrl: 'templates/chat-detail.html',
              controller: 'ChatDetailCtrl'
          }
      }
  })

    .state('tab.home', {
        url: '/home',
        views: {
            'tab-home': {
                templateUrl: 'templates/tabs/home.html',
                controller: 'TabHomeCtrl'
            }
        }
    })

    .state('tab.category', {
        url: '/category',
        views: {
            'tab-category': {
                templateUrl: 'templates/tabs/category.html',
                controller: 'TabCategoryCtrl'
            }
        }
    })

    .state('tab.filter', {
        url: '/filter',
        views: {
            'tab-filter': {
                templateUrl: 'templates/tabs/filter.html',
                controller: 'TabFilterCtrl'
            }
        }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  $stateProvider.state('about', {
      url: '/about',
      templateUrl: 'templates/about.html',
      controller: 'AboutCtrl'
  });

  $stateProvider.state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
  });

  $stateProvider.state('logout', {
      url: '/logout',
      controller: 'LogoutCtrl'
  });

  $stateProvider.state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controller: 'HomeCtrl'
  });

  $stateProvider.state('scan', {
      url: '/scan',
      templateUrl: 'templates/scan.html',
      controller: 'ScanCtrl'
  });

  $stateProvider.state('map', {
      url: '/map',
      templateUrl: 'templates/map.html',
      controller: 'MapCtrl'
  });

  $stateProvider.state('menu', {
      url: '/menu',
      templateUrl: 'templates/menu.html',
      controller: 'MenuCtrl'
  });

  $stateProvider.state('geomap', {
      url: '/geomap',
      templateUrl: 'templates/geomap.html',
      controller: 'GeomapCtrl'
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
  //$urlRouterProvider.otherwise('/tab/dash');

});
