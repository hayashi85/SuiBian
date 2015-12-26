angular.module('starter.controller.login', [])

.controller('LoginCtrl', function ($scope, $state, $http, Api) {

    var link = 'http://www.reachthecustomer.com/ServiceBooking/api.php';

    if (window.localStorage['username'] != null && window.localStorage['token'] != null) {

        $http.post(link, { action: 'validate', username: window.localStorage['username'], token: window.localStorage['token'] }).then(function (res) {
            Api = res.data;
        });

        if (Api.status == 'successful') {
            $state.go('tab.home');
        } else {
            window.localStorage['username'] = '';
            window.localStorage['token'] = '';
        }
    }

    $scope.data = {};
    $scope.showError = false;

    $scope.submit = function () {

        $http.post(link, { action: 'login', username: $scope.data.username, password: $scope.data.password }).then(function (res) {
            Api = res.data;
        });

        if (Api.status == 'successful') {
            window.localStorage['username'] = $scope.data.username;
            window.localStorage['token'] = Api.token;
            $state.go('tab.home');
        } else {
            $scope.showError = true;
            $scope.errorMessage = Api.err_code + Api.err_msg;
        }
    };
});
