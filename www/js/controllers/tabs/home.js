angular.module('starter.controller.tab.home', [])

.controller('TabHomeCtrl', function ($scope, $state, $stateParams, $ionicSideMenuDelegate, Services) {
    if (window.localStorage['username'] == '' || window.localStorage['username'] == null) {
        $state.go('login');
    } else {
        alert('Username : ' + window.localStorage['username'] + '\nToken : ' + window.localStorage['token']);
    }
    
    if ($stateParams.categoryId) {
        // add filter by category here
        $stateParams.categoryId;
    }
    $scope.services = Services.all();
    $scope.remove = function (service) {
        Services.remove(service);
    }
    $scope.toggleLeft = function () {
        $ionicSideMenuDelegate.toggleLeft();
    }
})