angular.module('starter.controller.login', [])

.controller('LoginCtrl', function ($scope, $state) {
    if (window.localStorage['username'] != null) {
        $state.go('tab.home');
    }

    $scope.submit = function () {
        window.localStorage['username'] = 'Eddie';
        window.localStorage['token'] = 'XXX123XXX';
        $state.go('tab.home');
    };
});

/*.controller('LoginCtrl', function ($scope, Users) {
    $scope.users = Users.all();
    $scope.remove = function (user) {
        Users.remove(user);
    }
});*/
