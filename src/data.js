const travelJSONData = [
  {
    id: -2,
    title: "Paphos",
    location: "Cyprus",
    googleMapsUrl:
      "https://www.google.com/maps/place/Paphos,+Cyprus/@34.7726773,32.3979051,13z/data=!3m1!4b1!4m5!3m4!1s0x14e70663f42de2c9:0x6c05fdff50f4b5e7!8m2!3d34.7753949!4d32.4217786",
    startDate: "30 October 2020",
    endDate: "7 November 2020",
    description: "Coral Bay. Beach Bar. Lara Beach.",
    imageUrl: "paphos.jpg",
  },
  {
    id: -1,
    title: "Ayia Napa",
    location: "Cyprus",
    googleMapsUrl:
      "https://www.google.com/maps/place/Ayia+Napa,+Cyprus/@34.9855357,33.9397259,12z/data=!3m1!4b1!4m5!3m4!1s0x14dfc568a7918259:0x96582c199eafaa40!8m2!3d34.9887366!4d34.0002782",
    startDate: "7 November 2020",
    endDate: "11 November 2020",
    description: "Cactus Park. Best Beach. Yellow Submarine.",
    imageUrl: "aiyanapa.jpeg",
  },
  {
    id: 0,
    title: "Larnaca",
    location: "Cyprus",
    googleMapsUrl:
      "https://www.google.com/maps/place/Larnaca,+Cyprus/@34.9014941,33.5500226,12z/data=!3m1!4b1!4m5!3m4!1s0x14e082a16c40cb13:0x4fcbf0221371d0a5!8m2!3d34.9182222!4d33.6200625",
    startDate: "11 November 2020",
    endDate: "14 November 2020",
    description: "Wine tasting. Restaurants. Birthday dinner.",
    imageUrl: "larnaca.jpg",
  },
  {
    id: 1,
    title: "Athens",
    location: "Greece",
    googleMapsUrl:
      "https://www.google.com/maps/place/Athens,+Greece/@37.9908164,23.6682993,12z/data=!3m1!4b1!4m5!3m4!1s0x14a1bd1f067043f1:0x2736354576668ddd!8m2!3d37.9838096!4d23.7275388",
    startDate: "14 August 2021",
    endDate: "18 August 2021",
    description: "Rooftop bars. Acropolis. Cable car rides. Greco's Project.",
    imageUrl: "athens.jpg",
  },

  {
    id: 2,
    title: "Nea Makri",
    location: "Greece",
    googleMapsUrl:
      "https://www.google.com/maps/place/Nea+Makri+190+05,+Greece/@38.0694376,23.9424477,13z/data=!3m1!4b1!4m5!3m4!1s0x14a182c1ac72aab5:0xb38f8f26c5b7e893!8m2!3d38.0878845!4d23.9761139",
    startDate: "18 August 2021",
    endDate: "25 August 2021",
    description: "Beach. Boat trips. Praying Mantis. Water sports.",
    imageUrl: "nea-makri.jpg",
  },

  {
    id: 3,
    title: "Mykonos",
    location: "Greece",
    googleMapsUrl:
      "https://www.google.com/maps/place/Mikonos+846+00,+Greece/@37.444457,25.3180739,14z/data=!3m1!4b1!4m5!3m4!1s0x14a2bf06bf0fdd37:0xfaa85debe77b7a44!8m2!3d37.4467185!4d25.3288623",
    startDate: "25 August 2021",
    endDate: "28 August 2021",
    description: "Boat Parties. Watermelon mojitos. Tropicana beach club.",
    imageUrl: "mykonos.jpg",
  },

  {
    id: 4,
    title: "Paros",
    location: "Greece",
    googleMapsUrl:
      "https://www.google.com/maps/place/Paros+844+00,+Greece/@37.0854854,25.1371132,14z/data=!3m1!4b1!4m5!3m4!1s0x1498710f28b4bfa7:0xf59bedca90e4a6ae!8m2!3d37.0856432!4d25.1488318",
    startDate: "28 August 2021",
    endDate: "1 September 2021",
    description: "Lots of cats. Dubliner. Captain Ben",
    imageUrl: "paros.jpeg",
  },

  {
    id: 5,
    title: "Santorini",
    location: "Greece",
    googleMapsUrl:
      "https://www.google.com/maps/place/Thera+847+00,+Greece/@36.4203259,25.4234157,15z/data=!3m1!4b1!4m5!3m4!1s0x1499cdce05e3bce9:0x9f4c192bbefa1db!8m2!3d36.4166485!4d25.432447",
    startDate: "1 September 2021",
    endDate: "4 September 2021",
    description: "Jacuzzi. Red Beach. Black Beach. Sunset in Oia.",
    imageUrl: "santorini.jpg",
  },

  {
    id: 6,
    title: "Crete",
    location: "Greece",
    googleMapsUrl:
      "https://www.google.com/maps/place/Crete,+Greece/@35.2431181,23.790838,8z/data=!3m1!4b1!4m5!3m4!1s0x149afe2f827d98a1:0x100bd2ce2b9c630!8m2!3d35.240117!4d24.8092691",
    startDate: "4 September 2021",
    endDate: "16 September 2021",
    description: "Boot of beer. Balos Beech. Elafonisi. Moussaka",
    imageUrl: "crete.jpeg",
  },

  {
    id: 7,
    title: "Rome",
    location: "Italy",
    googleMapsUrl:
      "https://www.google.com/maps/place/Metropolitan+City+of+Rome,+Italy/@41.8504438,11.9544673,9z/data=!3m1!4b1!4m5!3m4!1s0x13258a111bd74ac3:0x3094f9ab2388100!8m2!3d41.9027008!4d12.4962352",
    startDate: "16 September 2021",
    endDate: "24 September 2021",
    description: "You are in Rome now, you must be Rome-antic.",
    imageUrl: "rome.jpeg",
  },

  {
    id: 8,
    title: "Sorrento",
    location: "Italy",
    googleMapsUrl:
      "https://www.google.com/maps/place/80067+Sorrento,+Metropolitan+City+of+Naples,+Italy/@40.6237862,14.3576817,14z/data=!3m1!4b1!4m5!3m4!1s0x133b99536dbf5b61:0x2644eb57abc0ce40!8m2!3d40.6262925!4d14.3757985",
    startDate: "24 September 2021",
    endDate: "27 September 2021",
    description: "Lemoncello spritz. Capri. Pompeii",
    imageUrl: "sorrento.jpeg",
  },

  {
    id: 9,
    title: "Meta",
    location: "Italy",
    googleMapsUrl:
      "https://www.google.com/maps/place/80062+Meta,+Campania,+Metropolitan+City+of+Naples,+Italy/@40.6401907,14.408546,15z/data=!3m1!4b1!4m5!3m4!1s0x133b9908fa0c0919:0xb396785a92762205!8m2!3d40.6428867!4d14.4173398",
    startDate: "27 September 2021",
    endDate: "1 October 2021",
    description: "Beach. Mountain Scenery. Natural Azzuro",
    imageUrl: "meta.jpeg",
  },

  {
    id: 10,
    title: "Palermo",
    location: "Italy",
    googleMapsUrl:
      "https://www.google.com/maps/place/Palermo,+PA,+Italy/@38.1405228,13.2872484,12z/data=!3m1!4b1!4m5!3m4!1s0x1319e8c9814ed099:0xa0b042c233bd880!8m2!3d38.11569!4d13.3614868",
    startDate: "1 October 2021",
    endDate: "8 October 2021",
    description: "Food markets. Swordfish. Mondello Beach",
    imageUrl: "palermo.jpeg",
  },

  {
    id: 11,
    title: "Taormina",
    location: "Italy",
    googleMapsUrl:
      "https://www.google.com/maps/place/98039+Taormina,+Metropolitan+City+of+Messina,+Italy/@37.8548943,15.2784163,15z/data=!3m1!4b1!4m5!3m4!1s0x131411a191a0d9b5:0x74a19a34d616e949!8m2!3d37.8516366!4d15.2853127",
    startDate: "9 October 2021",
    endDate: "11 October 2021",
    description: "Greek Theatre. Cablecar. Mt Etna. Alacntra Gorges.",
    imageUrl: "taormina.jpeg",
  },

  {
    id: 12,
    title: "Syracuse",
    location: "Italy",
    googleMapsUrl:
      "https://www.google.com/maps/place/96100+Syracuse,+Province+of+Syracuse,+Italy/@37.0791437,15.2358769,13z/data=!3m1!4b1!4m5!3m4!1s0x1313ce8da28bdf79:0xd1736683b2c58b87!8m2!3d37.0754739!4d15.2865861",
    startDate: "11 October 2021",
    endDate: "15 October 2021",
    description: "Aperol Spritz. Restaurants. Archimedes",
    imageUrl: "syracuse.jpeg",
  },

  {
    id: 13,
    title: "Tenerife",
    location: "Spain",
    googleMapsUrl:
      "https://www.google.com/maps/place/Tenerife/@28.2931088,-16.8028537,10z/data=!3m1!4b1!4m5!3m4!1s0xc4029effe8682ed:0xb01a4bf1c84baf3c!8m2!3d28.2915637!4d-16.6291304",
    startDate: "15 October 2021",
    endDate: "29 October 2021",
    description: "Loro Parque. Swimming. Teide.",
    imageUrl: "tenerife.jpeg",
  },

  {
    id: 14,
    title: "Madrid",
    location: "Spain",
    googleMapsUrl:
      "https://www.google.com/maps/place/Madrid,+Spain/@40.4378698,-3.8196214,11z/data=!3m1!4b1!4m5!3m4!1s0xd422997800a3c81:0xc436dec1618c2269!8m2!3d40.4167754!4d-3.7037902",
    startDate: "29 October 2021",
    endDate: "5 November 2021",
    description: "Tapas. Art. Flamenco. Rioja. Churros.",
    imageUrl: "madrid.jpeg",
  },

  {
    id: 15,
    title: "Marrakech",
    location: "Morrocco",
    googleMapsUrl:
      "https://www.google.com/maps/place/Marrakesh,+Morocco/@31.6346023,-8.0778935,12z/data=!3m1!4b1!4m5!3m4!1s0xdafee8d96179e51:0x5950b6534f87adb8!8m2!3d31.6294723!4d-7.9810845",
    startDate: "5 November 2021",
    endDate: "9 November 2021",
    description: "Ouzoud waterfall. Markets. Tajines",
    imageUrl: "marrakech.jpeg",
  },

  {
    id: 16,
    title: "Sahara Desert",
    location: "Morrocco",
    googleMapsUrl:
      "https://www.google.com/maps/place/Sahara+Desert/@21.9751691,13.0830603,5z/data=!3m1!4b1!4m5!3m4!1s0x13883b64fb267151:0xd6406bdc582d7390!8m2!3d23.4162027!4d25.66283",
    startDate: "9 November 2021",
    endDate: "11 November 2021",
    description: "Camel rides. Sunset sunrise. Movie sets.",
    imageUrl: "sahara.jpeg",
  },

  {
    id: 17,
    title: "Essoauira",
    location: "Morrocco",
    googleMapsUrl:
      "https://www.google.com/maps/place/Essaouira,+Morocco/@31.5109424,-9.7800518,14z/data=!3m1!4b1!4m5!3m4!1s0xdad9a4e9f588ccf:0x57421a176d5d7d30!8m2!3d31.5084926!4d-9.7595041",
    startDate: "11 November 2021",
    endDate: "14 November 2021",
    description: "Beach. Surfing. Markets.",
    imageUrl: "essoauira.jpeg",
  },
  {
    id: 18,
    title: "Warsaw",
    location: "Poland",
    googleMapsUrl:
      "https://www.google.com/maps/place/Warsaw,+Poland/@52.2328546,20.9207678,11z/data=!3m1!4b1!4m5!3m4!1s0x471ecc669a869f01:0x72f0be2a88ead3fc!8m2!3d52.2296756!4d21.0122287",
    startDate: "11 February 2022",
    endDate: "13 February 2022",
    description: "Vodka. Coffee. Dumplings.",
    imageUrl: "poland.jpeg",
  },
  {
    id: 19,
    title: "Boston",
    location: "United States",
    googleMapsUrl:
      "https://www.google.com/maps/place/Boston,+MA,+USA/@42.3142643,-71.1107119,11z/data=!3m1!4b1!4m5!3m4!1s0x89e3652d0d3d311b:0x787cbf240162e8a0!8m2!3d42.3600825!4d-71.0588801",
    startDate: "16 March 2022",
    endDate: "20 March 2022",
    description: "Isabella Stewart Gardner. Paddy's Day. Tea Party.",
    imageUrl: "boston.jpeg",
  },
  {
    id: 20,
    title: "Riga",
    location: "Latvia",
    googleMapsUrl:
      "https://www.google.com/maps/place/Riga,+Latvia/@56.9718172,23.8482035,10z/data=!3m1!4b1!4m5!3m4!1s0x46eecfb0e5073ded:0x400cfcd68f2fe30!8m2!3d56.9676941!4d24.1056221",
    startDate: "1 April 2022",
    endDate: "3 April 2022",
    description: "KGB Museum. Rooftop cocktails. Pub crawl.",
    imageUrl: "riga.jpeg",
  },
  {
    id: 21,
    title: "Budapest",
    location: "Hungary",
    googleMapsUrl:
      "https://www.google.com/maps/place/Budapest,+Hungary/@47.4813346,18.8494256,10z/data=!3m1!4b1!4m5!3m4!1s0x4741c334d1d4cfc9:0x400c4290c1e1160!8m2!3d47.497912!4d19.040235",
    startDate: "29 April 2022",
    endDate: "2 May 2022",
    description: "Baths. Birthdays. Jacuzzi. Margaret Island.",
    imageUrl: "budapest.jpeg",
  },
  {
    id: 22,
    title: "Brussels",
    location: "Belgium",
    googleMapsUrl:
      "https://www.google.com/maps/place/Brussels,+Belgium/@50.8552113,4.3052053,12z/data=!3m1!4b1!4m5!3m4!1s0x47c3a4ed73c76867:0xc18b3a66787302a7!8m2!3d50.8476424!4d4.3571696",
    startDate: "13 May 2022",
    endDate: "14 May 2022",
    description:
      "Waffles. Atomium - national structure. Dinosaurs - Iguanodon. Chocolate making class.",
    imageUrl: "brussels.jpeg",
  },
  {
    id: 23,
    title: "Bruges",
    location: "Belgium",
    googleMapsUrl:
      "https://www.google.com/maps/place/Bruges,+Belgium/@51.260914,3.0816799,11z/data=!3m1!4b1!4m5!3m4!1s0x47c350d0c11e420d:0x1aa2f35ac8834df7!8m2!3d51.2091807!4d3.2247552",
    startDate: "15 May 2022",
    endDate: "16 May 2022",
    description: "Beer Factory. In Bruge. Colin Farrell.",
    imageUrl: "bruges.jpeg",
  },
  {
    id: 24,
    title: "Sorrento",
    location: "Italy",
    googleMapsUrl:
      "https://www.google.com/maps/place/80067+Sorrento,+Metropolitan+City+of+Naples,+Italy/@40.6238474,14.3402576,13z/data=!3m1!4b1!4m5!3m4!1s0x133b99536dbf5b61:0x2644eb57abc0ce40!8m2!3d40.6262925!4d14.3757985",
    startDate: "3 June 2022",
    endDate: "6 June 2022",
    description: "Katherine's hen party. Capri Boat trip. ",
    imageUrl: "sorrento2.jpeg",
  },
  {
    id: 25,
    title: "Paris",
    location: "France",
    googleMapsUrl:
      "https://www.google.com/maps/place/Paris,+France/@48.8588548,2.347035,11z/data=!3m1!4b1!4m5!3m4!1s0x47e66e1f06e2b70f:0x40b82c3688c9460!8m2!3d48.856614!4d2.3522219",
    startDate: "1 July 2022",
    endDate: "4 July 2022",
    description: "Eiffel Tower. Croissants in bed. Versailles.",
    imageUrl: "paris.jpeg",
  },
  {
    id: 26,
    title: "Bouffémont",
    location: "France",
    googleMapsUrl:
      "https://www.google.com/maps/place/95570+Bouff%C3%A9mont,+France/@49.0406923,2.2644919,13z/data=!3m1!4b1!4m5!3m4!1s0x47e642c9a49500c7:0x40b82c3688b3560!8m2!3d49.043675!4d2.307852",
    startDate: "4 July 2022",
    endDate: "10 July 2022",
    description: "Mansion House. Monet Gardens. Champagne.",
    imageUrl: "bouffemont.jpeg",
  },
];

export default travelJSONData;
