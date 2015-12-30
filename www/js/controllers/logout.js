angular.module('starter.controller.logout', [])

.controller('LogoutCtrl', function ($scope, $state) {
    window.localStorage['username'] = '';
    window.localStorage['token'] = '';
    alert('Logout');
    $state.go('login');
});