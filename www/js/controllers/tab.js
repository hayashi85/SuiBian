angular.module('starter.controller.tab', [])

.controller('TabCtrl', function ($scope, $state, $http, AdsServices, Services) {

    var link = 'http://www.reachthecustomer.com/ServiceBooking/api.php';

    $scope.home = function () {
        if (window.localStorage['username'] != null && window.localStorage['token'] != null) {
            $http.post(link, { action: 'validate', username: window.localStorage['username'], token: window.localStorage['token'] }).then(function (res) {
                if (res.data.status == 'successful') {
                    $http.post(link, { action: 'getAdsService', condition: '' }).then(function (res) {
                        AdsServices = res.data;
                        $http.post(link, { action: 'getService', condition: '' }).then(function (res) {
                            Services = res.data;
                            $state.go('tab.home');
                        });
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
    }
});