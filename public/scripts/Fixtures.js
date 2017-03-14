(function() {
    function Fixtures() {
        Fixtures = {};
        
        // placeholder resource description
        var resDesc = 'Placeholder - Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate';
        
        /*
        resource category options:
            cat-activ >> Activities
            cat-trans >> Transportation
            cat-lodg >> Lodging
            cat-inv >> Get Involved
            cat-other >> Other
        */      
        Fixtures.resources = [
            tripAdvisor = {
                itemTitle: 'Trip Advisor',
                categories: 'cat-activ cat-lodg',
                webLink: 'http://www.tripadvisor.com',
                itemDescr: resDesc
            },
            kayak = {
                itemTitle: 'Kayak',
                categories: 'cat-trans cat-lodg',
                webLink: 'http://www.kayak.com',
                itemDescr: resDesc
            },
            nomadicMatt = {
                itemTitle: "Nomadic Matt's Blog & Resources Page",
                categories: 'cat-other',
                webLink: 'http://www.nomadicmatt.com/travel-resources/',
                itemDescr: resDesc
            },
            momondo = {
                itemTitle: 'Momondo',
                categories: 'cat-trans',
                webLink: 'http://nomadicmatt.momondo.com',
                itemDescr: resDesc
            },
            googleFlights = {
                itemTitle: 'Google Flights',
                categories: 'cat-trans',
                webLink: 'http://www.google.com/flights',
                itemDescr: resDesc
            },
            airBnB = {
                itemTitle: 'Airbnb',
                categories: 'cat-lodg',
                webLink: 'http://www.airbnb.com',
                itemDescr: resDesc
            },
            agoda = {
                itemTitle: 'Agoda',
                categories: 'cat-lodg',
                webLink: 'http://www.agoda.com',
                itemDescr: resDesc
            },
            hostelWorld = {
                itemTitle: 'Hostelworld',
                categories: 'cat-lodg',
                webLink: 'http://www.hostelworld.com/?affiliate=PHG&ref_id=1011l3W8t8oe',
                itemDescr: resDesc
            },
            worldNomads = {
                itemTitle: 'World Nomads Travel Insurance',
                categories: 'cat-other',
                webLink: 'http://www.worldnomads.com',
                itemDescr: resDesc
            },
            lonelyPlanet = {
                itemTitle: 'Lonely Planet Guidebooks',
                categories: 'cat-activ cat-trans cat-lodg cat-other',
                webLink: 'http://www.lonelyplanet.com',
                itemDescr: resDesc
            },
            helpX = {
                itemTitle: 'Helpx',
                categories: 'cat-lodg cat-inv',
                webLink: 'http://www.helpx.net',
                itemDescr: resDesc
            },
            workAway = {
                itemTitle: 'Work Away',
                categories: 'cat-lodg cat-inv',
                webLink: 'http://www.workaway.info',
                itemDescr: resDesc
            },
            cdcTravel = {
                itemTitle: "CDC Travelers' Health",
                categories: 'cat-other',
                webLink: 'http://www.cdc.gov/travel',
                itemDescr: resDesc
            },
            usStep = {
                itemTitle: 'U.S. Smart Traveler Enrollment Program',
                categories: 'cat-other',
                webLink: 'http://step.state.gov',
                itemDescr: resDesc
            },
            usNPS = {
                itemTitle: 'U.S. National Park Service',
                categories: 'cat-activ',
                webLink: 'http://www.nps.gov',
                itemDescr: resDesc
            },
            worldPackers = {
                itemTitle: 'Worldpackers',
                categories: 'cat-lodg cat-inv',
                webLink: 'http://www.worldpackers.com/guide/traveling/exchange-your-skills',
                itemDescr: resDesc
            },
            wanderlustTF = {
                itemTitle: 'Wanderlust Magazine - Trip Finder',
                categories: 'cat-activ cat-other',
                webLink: 'http://www.wanderlust.co.uk/tripfinder/search',
                itemDescr: resDesc
            },
            paperPlanes = {
                itemTitle: 'Paper Planes',
                categories: 'cat-other',
                webLink: 'http://www.paperplanes.world',
                itemDescr: resDesc
            },
        ]
        
        return Fixtures;
    }

    angular
        .module('myApp')
        .factory('Fixtures', Fixtures)
})()






















