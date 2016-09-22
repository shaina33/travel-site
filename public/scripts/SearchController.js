(function() {
    function SearchCtrl ($scope, $firebaseArray, Fixtures) {
        
        $scope.showResults = false;
        $scope.search = function() {
            $scope.results = $scope.destinations;
            $scope.showResults = true;
        };
        
        var ref = firebase.database().ref().child("destinations");
        $scope.destinations = $firebaseArray(ref);
        $scope.addDestination = function(destinationObject) {
            //console.log(destinationObject);
            return $scope
                .destinations
                .$add(destinationObject);
        };
        $scope.seedDestinations = function() {
            for (index in Fixtures.destinationSeeds) {
                $scope.addDestination(Fixtures.destinationSeeds[index])
                    .then(function() { console.log($scope.destinations);
                //console.log(Fixtures.destinationSeeds[index].city);
                    })
            }
        }
        $scope.seedDestinations();
        //console.log($scope.destinations);
    }

    angular
        .module('myApp')
        .controller('SearchController', SearchCtrl)
})()