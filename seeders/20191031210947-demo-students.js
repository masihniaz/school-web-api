'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('students', 
      [
        {
          "name": "Loretta",
          "lastName": "Skellion",
          "email": "lskellion0@ucla.edu",
          "birthday": "2002-04-09",
          "address": "163 Spaight Place",
          "phoneNumber": "1685652128",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Serge",
          "lastName": "Dimberline",
          "email": "sdimberline1@tmall.com",
          "birthday": "2004-07-26",
          "address": "72 Pawling Junction",
          "phoneNumber": "8451544936",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Daryl",
          "lastName": "Fleg",
          "email": "dfleg2@taobao.com",
          "birthday": "2004-05-23",
          "address": "646 Jackson Alley",
          "phoneNumber": "6326156785",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Rosalia",
          "lastName": "Giorgetti",
          "email": "rgiorgetti3@zimbio.com",
          "birthday": "2002-06-06",
          "address": "11911 Ryan Trail",
          "phoneNumber": "5183587166",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Susanne",
          "lastName": "Tremelling",
          "email": "stremelling4@blogs.com",
          "birthday": "2002-03-30",
          "address": "87 Arkansas Street",
          "phoneNumber": "6458435583",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Julita",
          "lastName": "Bruyns",
          "email": "jbruyns5@unicef.org",
          "birthday": "2004-07-07",
          "address": "48 Ludington Park",
          "phoneNumber": "9336301310",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Llewellyn",
          "lastName": "Harrhy",
          "email": "lharrhy6@purevolume.com",
          "birthday": "2004-07-14",
          "address": "52221 Valley Edge Trail",
          "phoneNumber": "1657954752",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Jorrie",
          "lastName": "Chellam",
          "email": "jchellam7@dot.gov",
          "birthday": "2003-11-26",
          "address": "51255 Rowland Way",
          "phoneNumber": "3898465879",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Denyse",
          "lastName": "Badcock",
          "email": "dbadcock8@de.vu",
          "birthday": "2003-03-05",
          "address": "18060 Forest Drive",
          "phoneNumber": "6759919062",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Bertrand",
          "lastName": "Althorp",
          "email": "balthorp9@microsoft.com",
          "birthday": "2002-08-13",
          "address": "734 Debs Road",
          "phoneNumber": "5091018721",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Eward",
          "lastName": "Matheson",
          "email": "emathesona@jiathis.com",
          "birthday": "2003-11-23",
          "address": "8 Coleman Court",
          "phoneNumber": "1688769260",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Cassius",
          "lastName": "Whiteland",
          "email": "cwhitelandb@state.tx.us",
          "birthday": "2004-06-19",
          "address": "07361 Vermont Terrace",
          "phoneNumber": "5734258362",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Lauri",
          "lastName": "Lougheed",
          "email": "llougheedc@cbc.ca",
          "birthday": "2002-01-19",
          "address": "2574 David Crossing",
          "phoneNumber": "5708904109",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Preston",
          "lastName": "Kleiser",
          "email": "pkleiserd@msu.edu",
          "birthday": "2002-05-07",
          "address": "22648 Westridge Park",
          "phoneNumber": "2728678185",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Palm",
          "lastName": "Bidgod",
          "email": "pbidgode@yelp.com",
          "birthday": "2003-11-16",
          "address": "44266 Hudson Plaza",
          "phoneNumber": "4422410114",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Hertha",
          "lastName": "Matzel",
          "email": "hmatzelf@spotify.com",
          "birthday": "2004-04-16",
          "address": "54 Twin Pines Way",
          "phoneNumber": "5052831457",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Leslie",
          "lastName": "Putton",
          "email": "lputtong@artisteer.com",
          "birthday": "2003-09-22",
          "address": "568 Leroy Point",
          "phoneNumber": "9029759942",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Jourdain",
          "lastName": "Bastard",
          "email": "jbastardh@infoseek.co.jp",
          "birthday": "2000-11-13",
          "address": "937 1st Point",
          "phoneNumber": "8152934651",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Fidelity",
          "lastName": "Reinbeck",
          "email": "freinbecki@ihg.com",
          "birthday": "2002-10-17",
          "address": "4 Mayer Terrace",
          "phoneNumber": "1902265498",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Ronda",
          "lastName": "Dugood",
          "email": "rdugoodj@ucoz.com",
          "birthday": "2004-06-13",
          "address": "20 Miller Junction",
          "phoneNumber": "8839625648",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Jobey",
          "lastName": "Perry",
          "email": "jperryk@msn.com",
          "birthday": "2003-06-24",
          "address": "53513 Ronald Regan Place",
          "phoneNumber": "9532021651",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Brinna",
          "lastName": "Chevolleau",
          "email": "bchevolleaul@latimes.com",
          "birthday": "2002-11-10",
          "address": "49 Esker Lane",
          "phoneNumber": "5581388233",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Matthias",
          "lastName": "MacCosto",
          "email": "mmaccostom@globo.com",
          "birthday": "2003-06-08",
          "address": "32082 Michigan Parkway",
          "phoneNumber": "3774381665",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Arnuad",
          "lastName": "Defrain",
          "email": "adefrainn@mapquest.com",
          "birthday": "2002-11-09",
          "address": "2 American Ash Circle",
          "phoneNumber": "8407780198",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Stephie",
          "lastName": "Loveday",
          "email": "slovedayo@tamu.edu",
          "birthday": "2003-12-13",
          "address": "115 Farragut Road",
          "phoneNumber": "2784887369",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Brew",
          "lastName": "Machon",
          "email": "bmachonp@jiathis.com",
          "birthday": "2002-06-28",
          "address": "584 Dennis Trail",
          "phoneNumber": "9957137738",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Elsi",
          "lastName": "Natalie",
          "email": "enatalieq@ox.ac.uk",
          "birthday": "2003-05-30",
          "address": "8 Bonner Terrace",
          "phoneNumber": "2178907160",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Barth",
          "lastName": "Derye-Barrett",
          "email": "bderyebarrettr@livejournal.com",
          "birthday": "2001-02-12",
          "address": "44 Westend Parkway",
          "phoneNumber": "7366727495",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Tomi",
          "lastName": "Jeves",
          "email": "tjevess@vkontakte.ru",
          "birthday": "2002-11-21",
          "address": "7 Hazelcrest Drive",
          "phoneNumber": "6494901500",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Tiffi",
          "lastName": "Michelmore",
          "email": "tmichelmoret@usda.gov",
          "birthday": "2003-12-28",
          "address": "6 Lakeland Avenue",
          "phoneNumber": "2672961059",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Trace",
          "lastName": "Zamora",
          "email": "tzamorau@myspace.com",
          "birthday": "2003-05-07",
          "address": "189 Boyd Park",
          "phoneNumber": "6643268836",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Lita",
          "lastName": "Petracek",
          "email": "lpetracekv@macromedia.com",
          "birthday": "2000-12-24",
          "address": "481 Miller Point",
          "phoneNumber": "8979919454",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Lemuel",
          "lastName": "Cavozzi",
          "email": "lcavozziw@wufoo.com",
          "birthday": "2001-11-11",
          "address": "1735 Lukken Center",
          "phoneNumber": "5095082646",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Normie",
          "lastName": "Palffrey",
          "email": "npalffreyx@msu.edu",
          "birthday": "2004-08-06",
          "address": "40527 Park Meadow Park",
          "phoneNumber": "4058968072",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Benedicto",
          "lastName": "MacCulloch",
          "email": "bmaccullochy@github.com",
          "birthday": "2000-11-09",
          "address": "6 Surrey Way",
          "phoneNumber": "8845438104",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Herschel",
          "lastName": "Churchill",
          "email": "hchurchillz@mozilla.org",
          "birthday": "2001-10-01",
          "address": "44228 Sauthoff Place",
          "phoneNumber": "4603987308",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Sadella",
          "lastName": "Fuggle",
          "email": "sfuggle10@addtoany.com",
          "birthday": "2002-03-14",
          "address": "0926 Continental Road",
          "phoneNumber": "4318683873",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Ned",
          "lastName": "Chetwin",
          "email": "nchetwin11@businesswire.com",
          "birthday": "2003-10-23",
          "address": "8 Forest Run Circle",
          "phoneNumber": "8627146894",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Haydon",
          "lastName": "MacCaig",
          "email": "hmaccaig12@businessweek.com",
          "birthday": "2001-10-31",
          "address": "10504 Hollow Ridge Drive",
          "phoneNumber": "9462049391",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Fields",
          "lastName": "Staveley",
          "email": "fstaveley13@yellowbook.com",
          "birthday": "2001-01-28",
          "address": "40 Schlimgen Plaza",
          "phoneNumber": "6639484388",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Chrysler",
          "lastName": "Ros",
          "email": "cros14@constantcontact.com",
          "birthday": "2001-05-01",
          "address": "63760 Dwight Parkway",
          "phoneNumber": "9237127244",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Ingaborg",
          "lastName": "Fullman",
          "email": "ifullman15@sogou.com",
          "birthday": "2002-08-10",
          "address": "2005 Kenwood Pass",
          "phoneNumber": "5182672926",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Helen-elizabeth",
          "lastName": "Evelyn",
          "email": "hevelyn16@shop-pro.jp",
          "birthday": "2001-09-28",
          "address": "1094 Grim Crossing",
          "phoneNumber": "4116786488",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Sylvia",
          "lastName": "Sandbatch",
          "email": "ssandbatch17@shinystat.com",
          "birthday": "2003-08-18",
          "address": "19718 Gateway Plaza",
          "phoneNumber": "7321480858",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Ailene",
          "lastName": "Rate",
          "email": "arate18@tripadvisor.com",
          "birthday": "2001-04-29",
          "address": "2 Bluejay Pass",
          "phoneNumber": "8543183922",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Marilyn",
          "lastName": "Truggian",
          "email": "mtruggian19@diigo.com",
          "birthday": "2004-05-09",
          "address": "9298 Pawling Junction",
          "phoneNumber": "2515798329",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Hagen",
          "lastName": "Eakeley",
          "email": "heakeley1a@de.vu",
          "birthday": "2001-09-11",
          "address": "7634 East Plaza",
          "phoneNumber": "1098053397",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Conny",
          "lastName": "Kleinpeltz",
          "email": "ckleinpeltz1b@qq.com",
          "birthday": "2002-10-25",
          "address": "3 South Circle",
          "phoneNumber": "7548626814",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Joe",
          "lastName": "Elbourne",
          "email": "jelbourne1c@diigo.com",
          "birthday": "2001-09-17",
          "address": "4186 Hoard Junction",
          "phoneNumber": "6979177359",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          "name": "Ardelis",
          "lastName": "Wilmott",
          "email": "awilmott1d@telegraph.co.uk",
          "birthday": "2003-01-19",
          "address": "186 Lighthouse Bay Alley",
          "phoneNumber": "8841223711",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    , {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('students', null, {});
  }
};
