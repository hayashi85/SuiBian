angular.module('starter.controller.scan', [])

.controller('ScanCtrl', function ($scope, Camera) {
    $scope.getPhoto = function() {
        console.log('Getting camera');
        Camera.getPicture({
            quality: 75,
            targetWidth: 320,
            targetHeight: 320,
            saveToPhotoAlbum: false
        }).then(function(imageURI) {
            console.log(imageURI);
            $scope.lastPhoto = imageURI;
        }, function(err) {
            console.err(err);
        });
        /*
        navigator.camera.getPicture(function(imageURI) {
          console.log(imageURI);
        }, function(err) {
        }, { 
          quality: 50,
          destinationType: Camera.DestinationType.DATA_URL
        });
        */
    }
})