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
                        <p><span class="glyphicon glyphicon-heart" aria-hidden="true"></span> {{likes}} likes</p>\
                        <a href="{{link}}" class="photo-link"><span class="glyphicon glyphicon-share-alt photo-link" aria-hidden="true"></span> View on Instagram</a>\
                    </div>\
                </div>\
             </div>'
        $scope.instafeed1 = new Instafeed({
            get: 'user',
            userId: '23947096', //@natgeotravel
            clientId: $scope.clientID_IF,
            limit: 12,
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
            limit: 12,
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
        
        $scope.prepInstafeeds = function() {
            $(".photo-info").each(function(index, element) {
                console.log('test');
                $(element).css("height", function() {
                    return ( $(element).prev().height() - 2 );
                });
                $(element).css("width", function() {
                    return ( $(element).prev().width() ); 
                });
                console.log('new dimensions: ', $(element).height(), $(element).width());
            });
            console.log('prepInstafeeds done');
        }
        
        // Mouse Hover or Touch Interactions on Instafeed photos
        $(document).ready(function() {
            
//            $scope.prepInstafeeds();
            
            $(document).on('mouseover', ".photo-info", function(event) {
                //console.log('mouseover:', event);
                $(this).removeClass("no-show");
                $(this).addClass("show");
            });
            $(document).on('mouseleave', ".photo-info", function(event) {
                //console.log('mouseleave:', event);
                $(this).removeClass("show");
                $(this).addClass("no-show");
            });
            
            $(document).on('touchstart', ".photo-info", function(event) {
                console.log('touch', event);
                if ($(event.target).hasClass("photo-link")) {
                    return;
                } else {
                    if ($(this).hasClass("no-show")) {
//                        $(this).css("height", function() {
//                            return ( $(this).prev().height() - 2 );
//                        });
//                        $(this).css("width", function() {
//                            return ( $(this).prev().width() ); 
//                        });
//                        console.log('did it');
                        $(this).removeClass("no-show");
                        $(this).addClass("show");
                    } else {
                        $(this).removeClass("show");
                        $(this).addClass("no-show");
                    }    
                }
            });

        });
    }

    angular
        .module('myApp')
        .controller('InspirationController', InspirationCtrl)
})()