(function() {
    function SearchCtrl ($scope) {
        $scope.showResults = false;
        $scope.search = function() {
            $scope.showResults = true;
//            if $scope.mySearch.northAmerica {
//                $scope.results = "results in North America"
//            }
//            else {
//                $scope.results = "results worldwide"
//            }
            $scope.results = "my results!"
        };
    }

    angular
        .module('myApp')
        .controller('SearchController', SearchCtrl)
})()