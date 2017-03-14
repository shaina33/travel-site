(function() {
    function SearchCtrl ($scope, Fixtures, $http, $localStorage) {
        
        // initialize an array for each search topic
        $scope.languageArray = [];
        $scope.priceArray = [];
        $scope.regionArray = [];
        $scope.sparkArray = [];
        
        // restore any saved user inputs
        $scope.restoreInputs = function() {
            //console.log('restore inputs');
            if ($localStorage.checkbox) {
                $scope.checkbox = $localStorage.checkbox;
            }
            if ($localStorage.languageArray) {
                $scope.languageArray = $localStorage.languageArray;
            }
            if ($localStorage.priceArray) {
                $scope.priceArray = $localStorage.priceArray;
            }
            if ($localStorage.regionArray) {
                $scope.regionArray = $localStorage.regionArray;
            }
            if ($localStorage.sparkArray) {
                $scope.sparkArray = $localStorage.sparkArray;
            }
            //console.log('restored arrays:');
            //console.log($scope.languageArray, $scope.priceArray, $scope.regionArray, $scope.sparkArray);
        };
        $scope.restoreInputs();

        // a checkboxChange function for each search topic
        // these functions edit the arrays based on user input
        // use closure to generate specific versions from general function?
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
        
        // use the arrays to build mySearch object for querying
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
        
        // prepare search results for display
        $scope.processSearchResults = function() {
            $scope.results.forEach( function(destination) {
                destination.languageText = destination.language.join(', ');
                destination.sparkText = destination.spark.join(', ');
            });
        }
        
        // when Search button is pressed
        $scope.search = function() {
            $scope.results = [];
            $scope.showResults = false;
            $scope.showNoResults = false;

            // save user's selections
            if ($scope.checkbox !== undefined) {
                $localStorage.checkbox = $scope.checkbox;
                $localStorage.languageArray = $scope.languageArray;
                $localStorage.priceArray = $scope.priceArray;
                $localStorage.regionArray = $scope.regionArray;
                $localStorage.sparkArray = $scope.sparkArray;
                //console.log('saved in localStorage: ');
                //console.log($localStorage);
            }    
                
            // build mySearch query
            $scope.buildMySearch();

            // send mySearch query to database & output results
            $http.post('/search', $scope.mySearch)
                 .then(
                    function(response) {
                        //console.log('mySearch: ', $scope.mySearch);
                        $scope.results = response.data;
                        //console.log('# results: ', $scope.results.length);
                        if ($scope.results.length < 1) {
                            $scope.showNoResults = true;
                        } else {
                            $scope.processSearchResults();
                            $scope.showResults = true;
                        }
                    }, function(error) {
                        console.log(error);
                    }
                 );
        }
        
        // when Clear All Selections button is pressed
        $scope.reset = function() {
            $scope.mySearch = {};
            $scope.showResults = false;
            $scope.showNoResults = false;
            $scope.checkbox = {};
            $scope.languageArray = [];
            $scope.priceArray = [];
            $scope.regionArray = [];
            $scope.sparkArray = [];
            $localStorage.checkbox = {};
            $localStorage.languageArray = [];
            $localStorage.priceArray = [];
            $localStorage.regionArray = [];
            $localStorage.sparkArray = [];
        }
    }

    angular
        .module('myApp')
        .controller('SearchController', SearchCtrl)
})()