(function() {
    function SearchCtrl ($scope, Fixtures, $http) {
        
/*  $scope.mySearch can include:
    .geography
    [North America, South America, Central America, Europe, Africa, Asia, Australia]
    .activity
    [Nightlife, Nature]
    .language
    [English, Spanish, French, Arabic]
    .price
    [Budget, Moderate, Luxury]
    .size
    [Rural, Small City, Major City]
    .climate
    [Desert, Mountains, Rainforest, Temperate]
*/
        
        $scope.search = function() {
            $scope.results = [];
            $scope.showResults = false;
            if ($scope.mySearch !== undefined) {
                $scope.mySearch["geography"] = {$in: ["North America", "South America"]};
                $http.post('/search', $scope.mySearch)
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
        
        $scope.reset = function() {
            $scope.mySearch = {};
        }
    }

    angular
        .module('myApp')
        .controller('SearchController', SearchCtrl)
})()