angular.module('starter.controller.servicedate', [])

.controller('ServiceDateCtrl', function ($scope, $ionicHistory) {
    $scope.routeBack = function () {
        $ionicHistory.goBack();
    };
});