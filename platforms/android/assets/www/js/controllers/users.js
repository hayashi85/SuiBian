angular.module('starter.service.users', [])

.factory('Users', function () {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var users = [{
        id: 0,
        name: 'Eddie Lim',
        username: 'eddie',
        password: '123456'
    }, {
        id: 1,
        name: 'Alice Chin',
        username: 'alice',
        password: '123456'
    }, {
        id: 2,
        name: 'Chin Zi Yan',
        username: 'ziyan',
        password: '123456'
    }, {
        id: 3,
        name: 'Shazlin',
        username: 'lin',
        password: '123456'
    }];

    return {
        all: function () {
            return users;
        },
        remove: function (user) {
            users.splice(users.indexOf(user), 1);
        },
        get: function (userId) {
            for (var i = 0; i < users.length; i++) {
                if (users[i].id === parseInt(userId)) {
                    return users[i];
                }
            }
            return null;
        }
    };
});
