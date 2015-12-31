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

    $scope.group = {};

    $scope.team = {};

    $scope.toggleGroup = function (group) {
        if ($scope.isGroupShown(group)) {
            $scope.shownGroup = null;
        } else {
            $scope.shownGroup = group;
        }
    };

    $scope.isGroupShown = function (group) {
        return $scope.shownGroup === group;
    };
});