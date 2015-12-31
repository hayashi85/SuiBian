angular.module('starter.controller.serviceitem', [])

.controller('ServiceItemCtrl', function ($scope, $ionicHistory) {
    $scope.routeBack = function () {
        $ionicHistory.goBack();
    };
});