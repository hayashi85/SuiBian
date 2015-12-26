angular.module('starter.controller.tab.category', [])

.controller('TabCategoryCtrl', function ($scope, $ionicSideMenuDelegate, Categories) {
    //$scope.cat1 = Categories.get(1);
    $scope.categories = Categories.all();
    $scope.remove = function (category) {
        Categories.remove(category);
    }
    $scope.toggleLeft = function () {
        $ionicSideMenuDelegate.toggleLeft();
    }
})