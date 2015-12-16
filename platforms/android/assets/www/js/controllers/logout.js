angular.module('starter.controller.logout', [])

.controller('LogoutCtrl', function ($scope, $state) {
    alert('logout\n');

    window.localStorage['username'] = '';
    window.localStorage['token'] = '';
    $state.go('login');
});