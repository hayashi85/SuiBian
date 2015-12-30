angular.module('starter.service.categories', [])

.factory('Categories', function () {

    var categories;

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
