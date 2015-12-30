angular.module('starter.controller.menu', [])

.controller('MenuCtrl', function ($scope, $state) {

    $scope.logout = function () {
        window.localStorage['username'] = '';
        window.localStorage['token'] = '';
        $state.go('login');
    }
});