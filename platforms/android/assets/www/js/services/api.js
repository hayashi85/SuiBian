angular.module('starter.service.api', [])

.factory('Api', function ($http) {
    
    var api;

    return {
        all: function () {
            return api;
        },
        remove: function (item) {
            api.splice(api.indexOf(item), 1);
        },
        get: function (itemId) {
            for (var i = 0; i < api.length; i++) {
                if (api[i].id === parseInt(itemId)) {
                    return api[i];
                }
            }
            return null;
        }
    };
});
