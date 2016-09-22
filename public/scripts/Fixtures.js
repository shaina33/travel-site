(function() {
    function Fixtures() {
        Fixtures = {};
        
        Fixtures.destinationSeeds = [
            {
                city: 'Buenos Aires',
                country: 'Argentina',
                language: 'Spanish',
                size: 3,
                price: 2,
                terrain: 'coastal'
            },
            {
                city: 'Marrakech',
                country: 'Morocco',
                language: 'Arabic',
                size: 2,
                price: 2,
                terrain: 'desert'
            }
        ]
        
        return Fixtures;
    }

    angular
        .module('myApp')
        .factory('Fixtures', Fixtures)
})()