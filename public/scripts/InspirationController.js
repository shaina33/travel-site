(function() {
    function InspirationCtrl ($scope) {

        $scope.accessToken_IF = '4006211828.ba4c844.8605619ce58c48a391471eff658fd29b';
        $scope.clientID_IF = 'c6e2fc1923d5407aa5f3d1afc3c43ea9';
        $scope.instafeedTemplate = 
            '<div class="instaphoto">\
                <img src="{{image}}"/>\
                <div class="photo-info" style="height: {{height}}; width: {{width}}">\
                    <p>{{location}}</p>\
                    <p><span><3</span> {{likes}} likes</p>\
                    <a href="{{link}}">View on Instagram</a>\
                </div>\
             </div>'
        $scope.instafeed1 = new Instafeed({
            get: 'user',
            userId: '23947096', //@natgeotravel
            clientId: $scope.clientID_IF,
            limit: 8,
            accessToken: $scope.accessToken_IF,
            error: function(message) {
                console.log(message);
                },
            template: $scope.instafeedTemplate,
            resolution: 'low_resolution',
            target: 'instafeed1',
            sortBy: 'most-liked'
        });
        $scope.instafeed2 = new Instafeed({
            get: 'user',
            userId: '594916843', //@exploringtheglobe
            clientId: $scope.clientID_IF,
            limit: 8,
            accessToken: $scope.accessToken_IF,
            error: function(message) {
                console.log(message);
                },
            template: $scope.instafeedTemplate,
            resolution: 'low_resolution',
            target: 'instafeed2',
            sortBy: 'most-liked',
            success: $scope.addListeners                    
        });
//        $scope.addListeners = function() {
//            console.log('addListeners called');
//            
//        }
        
//        in html template:
//        ng-mouseenter="photoHover($event)" \
//             ng-mouseleave="photoLeave($event)"
//        $scope.photoHover = function(event) {
//            //$(event.currentTarget).getChild('.photo-info').show()
//            console.log('photoHover!');
//            console.log(event.currentTarget);
//        };
//        $scope.photoLeave = function(event) {
//            //$(event.currentTarget).getChild('.photo-info').hide()
//            console.log('photoLeave!');
//            console.log(event.currentTarget);
//        };
        
        $scope.instafeed1.run();
        $scope.instafeed2.run();
        //$scope.addListeners();
    }

    angular
        .module('myApp')
        .controller('InspirationController', InspirationCtrl)
})()