angular.module('starter.controller.serviceadvisor', [])

.controller('ServiceAdvisorCtrl', function ($scope, $state, $ionicHistory) {
    $scope.routeBack = function () {
        $ionicHistory.goBack();
    };

    $scope.viewCompanyDetail = function () {
        $state.go('companydetail');
    };
});