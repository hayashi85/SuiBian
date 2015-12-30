angular.module('starter.controller.tab.filter', [])

.controller('TabFilterCtrl', function ($scope, $ionicSideMenuDelegate) {
    $scope.toggleLeft = function () {
        $ionicSideMenuDelegate.toggleLeft();
    }
    $scope.sortingOptionList = [
        { text: "Latest", value: "latest" },
        { text: "Nearest", value: "nearest" },
        { text: "Cheapest", value: "cheapest" }
    ];

    $scope.serviceTypeOptionList = [
        { text: "All", value: "all" },
        { text: "Walk-in", value: "walkin" },
        { text: "On-site", value: "onsite" }
    ];

    $scope.areaOptionList = [
        { text: "All", value: "all" },
        { text: "No 42, Lorong Batu Nilam 31A,\nBandar Bukit Tinggi,\n41200, Klang, Selangor.", value: "adds1" },
        { text: "No 42, Lorong Batu Nilam 31A,\nBandar Bukit Tinggi,\n41200, Klang, Selangor.", value: "adds2" }
    ];

    var filter_sorting = 'latest';
    var filter_service_type = 'all';
    var filter_area = 'all';

    if (window.localStorage['filter_sorting'] != null && window.localStorage['filter_sorting'] != '')
        filter_sorting = window.localStorage['filter_sorting'];
    if (window.localStorage['filter_service_type'] != null && window.localStorage['filter_service_type'] != '')
        filter_service_type = window.localStorage['filter_service_type'];
    if (window.localStorage['filter_area'] != null && window.localStorage['filter_area'] != '')
        filter_area = window.localStorage['filter_area'];

    $scope.data = {
        sortingOption: filter_sorting,
        serviceTypeOption: filter_service_type,
        areaOption: filter_area
    };

    $scope.sortingOptionChange = function (item) {
        window.localStorage['filter_sorting'] = item.value;
    };

    $scope.serviceTypeOptionChange = function (item) {
        window.localStorage['filter_service_type'] = item.value;
    };

    $scope.areaOptionChange = function (item) {
        window.localStorage['filter_area'] = item.value;
    };
})