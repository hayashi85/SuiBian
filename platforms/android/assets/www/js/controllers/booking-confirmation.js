angular.module('starter.controller.booking.confirmation', [])

.controller('BookingConfirmationCtrl', function ($scope, $state, $ionicHistory, $ionicPopup) {
    $scope.routeBack = function () {
        $ionicHistory.goBack();
    };

    $scope.showConfirm = function () {
        var confirmPopup = $ionicPopup.confirm({
            title: 'Booking Confirmation',
            template: 'Is your booking detail correct?'
        });
        confirmPopup.then(function (res) {
            if (res) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Booking Successful',
                    template: 'Your booking is created, Service Advisor will get back to you ASAP.'
                });
                alertPopup.then(function (res) {
                    $state.go('tab.home');
                });
            }
        });
    };
});