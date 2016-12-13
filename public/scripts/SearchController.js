(function() {
    function SearchCtrl ($scope, Fixtures, $http) {
        
        $scope.search = function() {
            $scope.results = [];
            $scope.showResults = false;
            if ($scope.mySearch !== undefined) {
                
                // process multi-choice search fields
                $scope.prepGeo = function() {
                    $scope.mySearch.geography.terms = []
                    if ($scope.mySearch.geography.northAmerica) {
                        $scope.mySearch.geography.terms.push("North America")
                    }
                    if ($scope.mySearch.geography.centralAmerica) {
                        $scope.mySearch.geography.terms.push("Central America")
                    }
                    if ($scope.mySearch.geography.southAmerica) {
                        $scope.mySearch.geography.terms.push("South America")
                    }
                    if ($scope.mySearch.geography.europe) {
                        $scope.mySearch.geography.terms.push("Europe")
                    }
                    if ($scope.mySearch.geography.africa) {
                        $scope.mySearch.geography.terms.push("Africa")
                    }
                    if ($scope.mySearch.geography.asia) {
                        $scope.mySearch.geography.terms.push("Asia")
                    }
                    if ($scope.mySearch.geography.australia) {
                        $scope.mySearch.geography.terms.push("Australia")
                    }
                    return $scope.mySearch.geography.terms
                    
                }
                $scope.mySearch.geography = {$in: $scope.prepGeo()}
                
                // send mySearch query to database
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