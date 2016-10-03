(function() {
    function SearchCtrl ($scope, Fixtures, $http) {
        
        /*  $scope.mySearch includes:
            .geography
            .activity
            .language ~uppercased
            .price
            .size
            .climate
        */
        
        $scope.search = function() {
            $scope.results = [];
            $scope.showResults = false;
            if ($scope.mySearch !== undefined) {
                $http.get('/search', {params: $scope.mySearch})
                     .then(
                        function(response) {
                            console.log('mySearch: ',$scope.mySearch);
                            $scope.results = response.data;
                            console.log(response.data);
                            $scope.showResults = true;
                        }, function(error) {
                            console.log(error);
                        }
                     )
            } else {
                console.log('search undefined');
            }
        }
    }

    angular
        .module('myApp')
        .controller('SearchController', SearchCtrl)
})()