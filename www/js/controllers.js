angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope, $ionicSideMenuDelegate) {
    $scope.toggleLeft = function () {
        $ionicSideMenuDelegate.toggleLeft();
    }
})

.controller('ChatsCtrl', function ($scope, $ionicSideMenuDelegate, Services) {
    $scope.services = Services.all();
    $scope.remove = function (service) {
        Services.remove(service);
  }
  $scope.toggleLeft = function () {
      $ionicSideMenuDelegate.toggleLeft();
  }
})

.controller('ChatDetailCtrl', function ($scope, $stateParams, Services) {
    $scope.chat = Services.get($stateParams.chatId);
})

.controller('AccountCtrl', function ($scope, $ionicSideMenuDelegate) {
  $scope.settings = {
    enableFriends: true
  };
  $scope.toggleLeft = function () {
      $ionicSideMenuDelegate.toggleLeft();
  }
});
