angular.module('starter.controller.tab.category', [])

.controller('TabCategoryCtrl', function ($scope, $ionicSideMenuDelegate, $state, $http, Api) {

    var link = 'http://www.reachthecustomer.com/ServiceBooking/api.php';

    if (window.localStorage['username'] != null && window.localStorage['token'] != null) {
        $http.post(link, { action: 'validate', username: window.localStorage['username'], token: window.localStorage['token'] }).then(function (res) {
            Api = res.data;
            if (Api.status == 'successful') {
                $http.post(link, { action: 'getCategory', condition: '' }).then(function (res) {
                    $scope.categories = res.data;
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

    $scope.filterCategory = function (category_id) {
        window.localStorage['filter_category'] = category_id;
        $state.go('tab.home');
    };
})