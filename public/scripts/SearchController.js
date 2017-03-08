(function() {
    function SearchCtrl ($scope, Fixtures, $http, $localStorage) {
        
        if ($localStorage.savedTerms) {
            $scope.terms = $localStorage.savedTerms;
        }
        
        // Initialize an array for each search topic
        $scope.languageArray = [];
        $scope.priceArray = [];
        $scope.regionArray = [];
        $scope.sparkArray = [];

        // a checkboxChange function for each search topic
        // use closure to generate specifics from general function?
        $scope.checkboxChange_Lang = function(value) {
            if ($scope.checkbox[value]) {
                $scope.languageArray.push($scope.checkbox[value]);
            } else {
                var index = $scope.languageArray.indexOf(value);
                if (index > -1) {
                    $scope.languageArray.splice(index, 1);
                }
            }
        }            
        $scope.checkboxChange_Price = function(value) {
            if ($scope.checkbox[value]) {
                $scope.priceArray.push($scope.checkbox[value]);
            } else {
                var index = $scope.priceArray.indexOf(value);
                if (index > -1) {
                    $scope.priceArray.splice(index, 1);
                }
            }
        }            
        $scope.checkboxChange_Reg = function(value) {
            if ($scope.checkbox[value]) {
                $scope.regionArray.push($scope.checkbox[value]);
            } else {
                var index = $scope.regionArray.indexOf(value);
                if (index > -1) {
                    $scope.regionArray.splice(index, 1);
                }
            }
        }            
        $scope.checkboxChange_Spark = function(value) {
            if ($scope.checkbox[value]) {
                $scope.sparkArray.push($scope.checkbox[value]);
            } else {
                var index = $scope.sparkArray.indexOf(value);
                if (index > -1) {
                    $scope.sparkArray.splice(index, 1);
                }
            }
        }  
        
        // use arrays to build mySearch object for querying
        // use closure to generate specifics from general function?
        $scope.buildMySearch = function() {
            $scope.mySearch = {};
            if ($scope.languageArray.length > 0) {
                if ($scope.languageSurprise) {
                    $scope.languageArray = null;
                } else {
                    $scope.mySearch.language = {"$elemMatch": {
                        "$in": $scope.languageArray
                    }};
                }
            }
            if ($scope.priceArray.length > 0) {
                $scope.mySearch.price = {
                    "$in": $scope.priceArray
                };
            }
            if ($scope.regionArray.length > 0) {
                $scope.mySearch.region = {
                    "$in": $scope.regionArray
                };
            }
            if ($scope.sparkArray.length > 0) {
                $scope.mySearch.spark = {"$elemMatch": {
                    "$in": $scope.sparkArray
                }};
            }    
        }
        
        // when Submit button is pressed
        $scope.search = function() {
            $scope.results = [];
            $scope.showResults = false;
            $scope.showNoResults = false;
//            if ($scope.terms !== undefined) {
//                // save user's selections
//                $localStorage.savedTerms = $scope.terms;
//                
                // build mySearch query
                $scope.buildMySearch();
            
                // send mySearch query to database
                $http.post('/search', $scope.mySearch)
                     .then(
                        function(response) {
                            console.log('mySearch: ', $scope.mySearch);
                            $scope.results = response.data;
                            console.log('results: ', $scope.results);
                            if ($scope.results.length < 1) {
                                $scope.showNoResults = true;
                            } else {
                                $scope.showResults = true;
                            }
                        }, function(error) {
                            console.log(error);
                        }
                     )
//            } else {
//                console.log('search undefined');
//            }
        }
        
        $scope.reset = function() {
            $scope.terms = {}
            $scope.mySearch = {};
            $localStorage.savedTerms = {};
            $scope.showResults = false;
            $scope.showNoResults = false;
        }
    }

    angular
        .module('myApp')
        .controller('SearchController', SearchCtrl)
})()