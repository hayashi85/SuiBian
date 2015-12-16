angular.module('starter.service.categories', [])

.factory('Categories', function () {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var categories = [{
        id: 0,
        name: 'Electrical'
    }, {
        id: 1,
        name: 'Entertainment'
    }, {
        id: 2,
        name: 'Others'
    }];

    return {
        all: function () {
            return categories;
        },
        remove: function (category) {
            categories.splice(categories.indexOf(category), 1);
        },
        get: function (categoryId) {
            for (var i = 0; i < categories.length; i++) {
                if (categories[i].id === parseInt(categoryId)) {
                    return categories[i];
                }
            }
            return null;
        }
    };
});
