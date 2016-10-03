(function() {
    
    function config($locationProvider, $stateProvider) {
//        $locationProvider
//            .html5Mode({
//                enabled: true,
//                requireBase: false
//            });
        
        $stateProvider
            .state('landing', {
                url: '/',
                templateUrl: 'templates/landing.html'
            })
            .state('inspiration', {
                url: '/inspiration',
                templateUrl: '/templates/inspiration.html'
            })
            .state('search', {
                url: '/search',
                templateUrl: '/templates/search.html'
            })
            .state('resources', {
                url: '/resources',
                templateUrl: '/templates/resources.html'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'templates/about.html'
            });
    }
    
    angular
        .module('myApp', ['ui.router'])
        .config(config);
})();