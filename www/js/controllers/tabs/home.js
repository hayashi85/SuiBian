angular.module('starter.controller.tab.home', [])

.controller('TabHomeCtrl', function ($scope, $state, $stateParams, $http, $ionicSideMenuDelegate, AdsServices, Services) {

    var link = 'http://www.reachthecustomer.com/ServiceBooking/api.php';

    if (window.localStorage['username'] != null && window.localStorage['token'] != null) {
        $http.post(link, { action: 'validate', username: window.localStorage['username'], token: window.localStorage['token'] }).then(function (res) {
            if (res.data.status == 'successful') {
                $http.post(link, { action: 'getAdsService', condition: '' }).then(function (res) {
                    AdsServices = res.data;
                    $scope.adsServices = AdsServices;
                });
                $http.post(link, { action: 'getService', condition: '' }).then(function (res) {
                    Services = res.data;
                    $scope.services = Services;
                });
            } else {
                window.localStorage['username'] = '';
                window.localStorage['token'] = '';
                $state.go('login');
            }
        });
    } else {
        $state.go('login');
    }

    $scope.adsServices = AdsServices;
    $scope.services = Services;

    $scope.toggleLeft = function () {
        $ionicSideMenuDelegate.toggleLeft();
    }
})