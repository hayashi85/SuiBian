angular.module('starter.service.services', [])

.factory('Services', function () {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var services;

    return {
        all: function () {
            return services;
        },
        remove: function (service) {
            services.splice(services.indexOf(service), 1);
        },
        get: function (serviceId) {
            for (var i = 0; i < services.length; i++) {
                if (services[i].id === parseInt(serviceId)) {
                    return services[i];
                }
            }
            return null;
        }
    };
});
