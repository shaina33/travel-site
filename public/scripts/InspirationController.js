(function() {
    function InspirationCtrl ($scope) {

        // Set up Instafeeds
        $scope.accessToken_IF = '4006211828.ba4c844.8605619ce58c48a391471eff658fd29b';
        $scope.clientID_IF = 'c6e2fc1923d5407aa5f3d1afc3c43ea9';
        $scope.instafeedTemplate = 
            '<div class="instaphoto">\
                <img src="{{image}}" class="photo-background"/>\
                <div class="photo-info no-show" style="height: {{height}}; width: {{width}}">\
                    <div class="photo-text">\
                        <p>{{location}}</p>\
                        <p><span><3</span> {{likes}} likes</p>\
                        <a href="{{link}}">View on Instagram</a>\
                    </div>\
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
        });
        
        // Run Instafeeds
        $scope.instafeed1.run();
        $scope.instafeed2.run();
        
        // Mouse Hover Interaction on Instafeed photos
        $(document).ready(function() {
            $(document).on('mouseover', ".photo-info", function(event) {
                console.log(event);
                $(this).removeClass("no-show");
                $(this).addClass("show");
            });
            $(document).on('mouseleave', ".photo-info", function(event) {
                console.log(event);
                $(this).removeClass("show");
                $(this).addClass("no-show");
            })
        });
    }

    angular
        .module('myApp')
        .controller('InspirationController', InspirationCtrl)
})()