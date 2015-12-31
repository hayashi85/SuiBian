angular.module('starter.controller.service', [])

.controller('ServiceCtrl', function ($scope, $ionicHistory, $state) {
    $scope.routeBack = function () {
        $ionicHistory.goBack();
    };

    $scope.showDateList = function () {
        $state.go('servicedate');
    };

    $scope.editServiceItem = function () {
        $state.go('serviceitem');
    };

    $scope.viewCompanyDetail = function () {
        $state.go('companydetail');
    };

    $scope.selectAdvisor = function () {
        $state.go('serviceadvisor');
    };

    $scope.booking = function () {
        $state.go('booking_confirmation');
    };
});