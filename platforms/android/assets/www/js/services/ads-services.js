angular.module('starter.service.ads-services', [])

.factory('AdsServices', function () {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var adsServices;

    return {
        all: function () {
            return adsServices;
        },
        remove: function (service) {
            adsServices.splice(adsServices.indexOf(service), 1);
        },
        get: function (serviceId) {
            for (var i = 0; i < adsServices.length; i++) {
                if (adsServices[i].id === parseInt(serviceId)) {
                    return adsServices[i];
                }
            }
            return null;
        }
    };
});
