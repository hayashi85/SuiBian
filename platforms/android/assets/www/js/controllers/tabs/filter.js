angular.module('starter.controller.tab.filter', [])

.controller('TabFilterCtrl', function ($scope, $ionicSideMenuDelegate) {
    $scope.toggleLeft = function () {
        $ionicSideMenuDelegate.toggleLeft();
    }
})