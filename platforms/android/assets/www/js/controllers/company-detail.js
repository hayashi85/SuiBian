angular.module('starter.controller.companydetail', [])

.controller('CompanyDetailCtrl', function ($scope, $ionicHistory) {
    $scope.routeBack = function () {
        $ionicHistory.goBack();
    };
});