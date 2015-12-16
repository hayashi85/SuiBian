angular.module('starter.service.services', [])

.factory('Services', function () {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var services = [{
        id: 0,
        companyName: 'Company A',
        tag: 'A/C,Service,In-house',
        service: 'Ah Seng Aircond Service',
        price: 'RM200.00',
        promoPrice: 'RM100.00',
        distance: '5.5km',
        face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
    }, {
        id: 1,
        companyName: 'Company B',
        tag: 'A/C,Service,In-house',
        service: 'Ah Seng Aircond Service',
        price: 'RM200.00',
        promoPrice: 'RM100.00',
        distance: '5.5km',
        face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
    }, {
        id: 2,
        companyName: 'Company C',
        tag: 'A/C,Service,In-house',
        service: 'Ah Seng Aircond Service',
        price: 'RM200.00',
        promoPrice: 'RM100.00',
        distance: '5.5km',
        face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
    }, {
        id: 3,
        companyName: 'Company D',
        tag: 'A/C,Service,In-house',
        service: 'Ah Seng Aircond Service',
        price: 'RM200.00',
        promoPrice: 'RM100.00',
        distance: '5.5km',
        face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
    }, {
        id: 4,
        companyName: 'Company A',
        tag: 'A/C,Service,In-house',
        service: 'Ah Seng Aircond Service',
        price: 'RM200.00',
        promoPrice: 'RM100.00',
        distance: '5.5km',
        face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
    }];

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
