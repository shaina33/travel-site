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
                itemDescr: "TripAdvisor is a major knowledge resource and worldwide community of reviewers. For any destination, it's a great place to learn what the top sights and activities are. You'll find helpful reviews and ratings for local attractions, restaurants, hotels, daytrip vendors, and more. You can also search for vacation rentals here."
            },
            kayak = {
                itemTitle: 'Kayak',
                categories: 'cat-trans cat-lodg',
                webLink: 'http://www.kayak.com',
                itemDescr: "Kayak is one of the best flight search engines for US flights. In addition to showing a large selection of great deals, what really sets them apart is their helpful search filters, which make it easy to compare your realistic flight options. You can also use their 'Explore' tool to discover where you can travel to from your home airport."
            },
            nomadicMatt = {
                itemTitle: "Nomadic Matt",
                categories: 'cat-other',
                webLink: 'http://www.nomadicmatt.com/travel-resources/',
                itemDescr: 'Matt Kepnes, a.k.a. Nomadic Matt, is a well-known travel blogger and the author of "How to Travel the World on $50 a Day". His website offers free travel guides to many popular destinations, budget travel tips, and a fantastic resource listing.'
            },
            momondo = {
                itemTitle: 'Momondo',
                categories: 'cat-trans',
                webLink: 'http://www.momondo.com',
                itemDescr: 'Momondo is an excellent flight search engine for worldwide flights. In addition to larger sites, they also search through smaller booking sites to bring you many flight options. Their calendar feature is helpful when you have very flexible travel dates.'
            },
            googleFlights = {
                itemTitle: 'Google Flights',
                categories: 'cat-trans',
                webLink: 'http://www.google.com/flights',
                itemDescr: 'Google Flights particularly shines when you want to explore flight options for flexible destinations and dates. You can choose a trip duration, timeframe, region, interest, and basic flight preferences, then see flight deals.'
            },
            airBnB = {
                itemTitle: 'Airbnb',
                categories: 'cat-lodg',
                webLink: 'http://www.airbnb.com',
                itemDescr: "Airbnb provides a platform for renting a home or room from individuals around the world. It's a great alternative to traditional accomodations, and gives you the opportunity to connect with locals while staying in less touristy neighborhoods."
            },
            agoda = {
                itemTitle: 'Agoda',
                categories: 'cat-lodg',
                webLink: 'http://www.agoda.com',
                itemDescr: "Agoda is the go-to site for booking hotels and guesthouses in Asia. They offer many options and great rates."
            },
            hostelWorld = {
                itemTitle: 'Hostelworld',
                categories: 'cat-lodg',
                webLink: 'http://www.hostelworld.com/?affiliate=PHG&ref_id=1011l3W8t8oe',
                itemDescr: "Hostelworld is the best site for booking hostel accomodations."
            },
            worldNomads = {
                itemTitle: 'World Nomads Travel Insurance',
                categories: 'cat-other',
                webLink: 'http://www.worldnomads.com',
                itemDescr: "World Nomads provides excellent insurance for travelers. They are recommended by Lonely Planet, National Geographic, and Nomadic Matt. Don't forget this important part of your trip preparations!"
            },
            lonelyPlanet = {
                itemTitle: 'Lonely Planet Guidebooks',
                categories: 'cat-activ cat-trans cat-lodg cat-other',
                webLink: 'http://www.lonelyplanet.com',
                itemDescr: "Lonely Planet is one of the major travel guidebook manufacturers. They offer books on a wide variety of destinations, each offering good organization, appealing photographs, and detailed, helpful information. Also check out their eBooks, smartphone apps, and online content."
            },
            helpX = {
                itemTitle: 'Helpx',
                categories: 'cat-lodg cat-inv',
                webLink: 'http://www.helpx.net',
                itemDescr: "HelpX connects travelers to a variety of work and volunteer opportunites. Save money and engage with locals while creating one-of-a-kind memories. Options include farms, hostels, and sailing boats that need help in exchange for accomodations."
            },
            workAway = {
                itemTitle: 'WorkAway',
                categories: 'cat-lodg cat-inv',
                webLink: 'http://www.workaway.info',
                itemDescr: "Like HelpX, WorkAway also connects travelers to work and volunteer opportunities around the world. Hosts often offer food & accomodation in exchange for your help in a variety of areas, such as farm/home maintenance, language or computer skills, or childcare."
            },
            cdcTravel = {
                itemTitle: "CDC Travelers' Health",
                categories: 'cat-other',
                webLink: 'http://www.cdc.gov/travel',
                itemDescr: "Don't forget to check if you need any special vaccinations or other health precaustions for your destination."
            },
            usStep = {
                itemTitle: 'U.S. Smart Traveler Enrollment Program',
                categories: 'cat-other',
                webLink: 'http://step.state.gov',
                itemDescr: "If you're a US citizen, take a few minutes to enroll yourself in STEP before traveling internationally. STEP registers your trip with the local US embassy or consulate, so that they'll be able to help you in case of an emergency."
            },
            usNPS = {
                itemTitle: 'U.S. National Park Service',
                categories: 'cat-activ',
                webLink: 'http://www.nps.gov',
                itemDescr: "Learn about all 417 national parks in the USA! Enjoy endless landscapes, outdoor activities, and history in every corner of the USA."
            },
            worldPackers = {
                itemTitle: 'Worldpackers',
                categories: 'cat-lodg cat-inv',
                webLink: 'http://www.worldpackers.com/guide/traveling/exchange-your-skills',
                itemDescr: "Trade your skills for accomodation! Hosts need all sorts of skills, such cooking, web development &amp; social media, bartending, photography, and teaching."
            },
            wanderlustTF = {
                itemTitle: 'Wanderlust Magazine - Trip Finder',
                categories: 'cat-activ cat-other',
                webLink: 'http://www.wanderlust.co.uk/tripfinder/search',
                itemDescr: "Do you prefer signing up for pre-planned trip through a tour company? If so, Wanderlust's Trip Finder tool can help you find the perfect tour. You can choose a region or country, what kind of trip you're looking for, and your travel dates."
            }
        ]
        
        return Fixtures;
    }

    angular
        .module('myApp')
        .factory('Fixtures', Fixtures)
})()






















