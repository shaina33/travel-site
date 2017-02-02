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
        
        // placeholder resource description
        var resDesc = 'Placeholder - Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate';
        
        /*
        category options:
            cat-activ >> Activities
            cat-trans >> Transportation
            cat-lodg >> Lodging
            cat-inv >> Get Involved
            cat-other >> Other
        */      
        Fixtures.resources = [
            tripadvisor = {
                itemTitle: 'Trip Advisor',
                category: 'cat-activ',
                webLink: 'http://www.tripadvisor.com',
                itemDescr: resDesc
            },
            kayak = {
                itemTitle: 'Kayak',
                category: 'cat-trans',
                webLink: 'http://www.kayak.com',
                itemDescr: resDesc
            }
        ]
        
        return Fixtures;
    }

    angular
        .module('myApp')
        .factory('Fixtures', Fixtures)
})()