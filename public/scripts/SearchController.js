(function() {
    function SearchCtrl ($scope, Fixtures, $http, $localStorage) {
        
        if ($localStorage.savedTerms) {
            $scope.terms = $localStorage.savedTerms;
        }
        
        $scope.search = function() {
            $scope.results = [];
            $scope.showResults = false;
            if ($scope.terms !== undefined) {
                
                // save user's selections
                $localStorage.savedTerms = $scope.terms;
                
                // process search terms into mySearch query
                $scope.mySearch = {}
                $scope.prepGeo = function() {
                    $scope.mySearch.geography = []
                    if ($scope.terms.geography.northAmerica) {
                        $scope.mySearch.geography.push("North America")
                    }
                    if ($scope.terms.geography.centralAmerica) {
                        $scope.mySearch.geography.push("Central America")
                    }
                    if ($scope.terms.geography.southAmerica) {
                        $scope.mySearch.geography.push("South America")
                    }
                    if ($scope.terms.geography.europe) {
                        $scope.mySearch.geography.push("Europe")
                    }
                    if ($scope.terms.geography.africa) {
                        $scope.mySearch.geography.push("Africa")
                    }
                    if ($scope.terms.geography.asia) {
                        $scope.mySearch.geography.push("Asia")
                    }
                    if ($scope.terms.geography.australia) {
                        $scope.mySearch.geography.push("Australia")
                    }
                    return {$in: $scope.mySearch.geography};
                    
                };
                $scope.mySearch.geography = $scope.prepGeo();
                $scope.mySearch.activities = $scope.terms.activities;
                $scope.mySearch.language = $scope.terms.language;
                $scope.mySearch.price = $scope.terms.price;
                $scope.mySearch.size = $scope.terms.size;
                $scope.mySearch.climate = $scope.terms.climate;
                
                // send mySearch query to database
                $http.post('/search', $scope.mySearch)
                     .then(
                        function(response) {
                            console.log('mySearch: ', $scope.mySearch);
                            $scope.results = response.data;
                            console.log($scope.results);
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
            $scope.terms = {}
            $scope.mySearch = {};
            $localStorage.savedTerms = {};
            $scope.showResults = false;
        }
    }

    angular
        .module('myApp')
        .controller('SearchController', SearchCtrl)
})()