angular.module('starter.controller.tab.home', [])

.controller('TabHomeCtrl', function ($scope, $state, $stateParams, $http, $ionicSideMenuDelegate) {

    var link = 'http://www.reachthecustomer.com/ServiceBooking/api.php';

    if (window.localStorage['username'] != null && window.localStorage['token'] != null) {
        $http.post(link, { action: 'validate', username: window.localStorage['username'], token: window.localStorage['token'] }).then(function (res) {
            if (res.data.status == 'successful') {
                $http.post(link, { action: 'getAdsService', condition: '' }).then(function (res) {
                    $scope.adsServices = res.data;
                });
                $http.post(link, { action: 'getService', condition: '' }).then(function (res) {
                    $scope.services = res.data;
                });
            } else {
                window.localStorage['username'] = '';
                window.localStorage['token'] = '';
                $state.go('login');
            }
        });
    }

    $scope.toggleLeft = function () {
        $ionicSideMenuDelegate.toggleLeft();
    }
})