﻿angular.module('starter.controller.about', [])

.controller('AboutCtrl', function ($scope, $cordovaSocialSharing) {
    $scope.shareAnywhere = function () {
        $cordovaSocialSharing.share("This is your message", "This is your subject", "www/imagefile.png", "http://blog.nraboy.com");
    }

    $scope.shareViaTwitter = function (message, image, link) {
        $cordovaSocialSharing.canShareVia("twitter", message, image, link).then(function (result) {
            $cordovaSocialSharing.shareViaTwitter(message, image, link);
        }, function (error) {
            alert("Cannot share on Twitter");
        });
    }
});