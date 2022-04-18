# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!([
  {
    "username": "dani",
    "password": "123"
    "bio": 
  }
])

Destination.create!([
    {
        "name": "Grand Canyon", 
        "photograph": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqu1KSFjQhh_ofo_oucW1MB4QocqB-KxhP1g&usqp=CAU",
        "state": "Arizona",
        "description": "Grand Canyon is considered one of the finest examples of arid-land erosion in the world. Incised by the Colorado River, the canyon is immense, averaging 4,000 feet deep for its entire 277 miles. It is 6,000 feet deep at its deepest point and 18 miles at its widest."
    }, {
        "name": "Horseshoe Bend",
        "photograph": "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/75/c2/35.jpg",
        "state": "Arizona",
        "description": "Horseshoe Bend is a horseshoe-shaped incised meander of the Colorado River, located in the town of Page, Arizona, United States. The hike is about . 6 miles one-way to the overlook. The overlook is about a 1,000' drop, looking down onto the Colorado River."
    }, {
        "name": "Snoqualmie Falls",
        "photograph": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhNcfI-_GadEFWi9c80vX8Pako_gEnMR7hPw&usqp=CAU",
        "state": "Washington",
        "description": "Snoqualmie Falls is a breathtaking waterfall cascading 268 feet over granite cliffs. It is the second most visited natural landmark in Washington after Mount Rainier. It is more than twice as high as Niagara Falls!" 
    }, {
        "name": "Mount Rainier",
        "photograph": "https://mtrainierguestservices.com/wp-content/uploads/sites/10/2017/12/mt-rainier6.jpg",
        "state": "Washington",
        "description": "Mount Rainier and its associated geologic and glacial features. At a height of 14,410 feet, Mount Rainier is the highest volcanic peak in the contiguous United States. It has the largest alpine glacial system outside of Alaska and the world's largest volcanic glacier cave system."
    }, {
        "name": "Haystack Rock",
        "photograph": "http://res.cloudinary.com/simpleview/image/upload/v1597448272/clients/cannonbeachor/Haystack_Rock_by_joe_f8879bbf-dee9-4246-96df-8afa95a95c1e.jpg",
        "state": "Oregon",
        "description": "Haystack Rock is one of Oregon's most recognizable landmarks, home to colorful tidepools and diverse birdlife. Featured in countless novels, television programs, and movies such as The Goonies and Kindergarten Cop. This basalt sea stack rises 235 feet from the edge of the shoreline."
    }, {
        "name": "Multnomah Falls",
        "photograph": "https://www.wta.org/site_images/hikes/multnomah-falls-1.jpg/@@images/6d89ef16-d248-4fe6-8da3-6342443c3b58.jpeg",
        "state": "Oregon",
        "description": "Formed by the cataclysmic Missoula Floods beginning 15,000 years ago and fed mainly by underground springs, Multnomah Falls drops 635 feet in two major tiers down basalt cliffs. It ranks as the tallest waterfall in Oregon and is one of the most visited tourism sites in the state."
    }, {
        "name": "old Faithful",
        "photograph": "http://jacksonhole-traveler-production.s3.amazonaws.com/wp-content/uploads/2014/05/old-faithful-4OFS1059-840x560.jpg",
        "state": "Wyoming",
        "description": "Old Faithful is a cone geyser in Yellowstone National Park in Wyoming, United States. It was named in 1870 during the Washburn–Langford–Doane Expedition and was the first geyser in the park to be named. It is a highly predictable geothermal feature and has erupted every 44 minutes to two hours since 2000."
    }, {
        "name": "Grand Teton National Park",
        "photograph": "https://www.visittheusa.com/sites/default/files/styles/hero_l/public/images/hero_media_image/2016-10/Grand%20Teton.jpg?h=97b787f8&itok=1BN5UptV",
        "state": "Wyoming",
        "description": "Grand Teton National Park boasts 310,000 acres of lush valley floors, mountain meadows, alpine lakes and the rising peaks of the Grand Teton Mountain Range. Located just north of Jackson, Wyoming, Grand Teton has a diverse and long-standing history that includes human use from more than 11,000 years ago."
    }, {
        "name": "City of Rocks",
        "photograph": "https://img-aws.ehowcdn.com/700x/cdn.onlyinyourstate.com/wp-content/uploads/2017/07/city-of-rocks-700x467.jpg",
        "state": "Idaho",
        "description": "The City of Rocks is a geologic marvel that must be witnessed if you haven't seen it already. Located north of the Idaho and Utah border, this natural wonder is an absolutely beautiful landscape of granite masses that you just can't see anywhere else in the world. Whether you're into hiking, rock climbing, or just looking...this place will blow you away!"
    }, {
        "name": "Hells Canyon",
        "photograph": "https://img-aws.ehowcdn.com/700x/cdn.onlyinyourstate.com/wp-content/uploads/2017/07/hells-canyon-700x463.jpg",
        "state": "Idaho",
        "description": "Hells Canyon is a ten-mile-wide (16 km) canyon in the western United States, located along the border of eastern Oregon, a small section of eastern Washington and western Idaho. It is part of the Hells Canyon National Recreation Area which is also located in part of the Wallowa-Whitman National Forest."
    }, {
        "name": "Yosemite National Park",
        "photograph": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKEOgw9BAVfT9K7yud-c2WD6Kqq_TvIlGKNA&usqp=CAU",
        "state": "California",
        "description": "Yosemite National Park lies in the heart of California. With its 'hanging' valleys, many waterfalls, cirque lakes, polished domes, moraines and U-shaped valleys, it provides an excellent overview of all kinds of granite relief fashioned by glaciation."
    }, {
        "name": "Jedediah Smith Redwoods State Park",
        "photograph": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVSq33sOc1RvxCJVrudFJpapMPiqU1hUQ_kw&usqp=CAU",
        "state": "California",
        "description": "Jedediah Smith Redwoods State Park is the last in a long string of redwood parks that stretch up Northern California's coast. A few miles inland from the ocean, the park is densely forested with huge ancient trees. In fact, it contains seven percent of all the old-growth redwoods left in the world."
    },{
        "name": "Carlsbad Caverns National Park",
        "photograph": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLDJAOZriHGf3EQAGEzMXzVS3cs5CZTIc3tw&usqp=CAU&reload=on",
        "state": "New Mexico",
        "description": "Comprised of nearly 120 known caves, Carlsbad Caverns National Park is hidden mostly underground. Carved from limestone deposited in an ancient sea, the alien underground landscape is one of the most famous New Mexico tourist attractions."
    },{
        "name": "Glennwood Hot Springs",
        "photograph": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRj87_IECWDrdU-jx9wMsyahxpbyEAKFU8hg&usqp=CAU",
        "state": "Colorado",
        "description": "The historic thermal spring water has been drawing visitors from all over the world since 1888. The source of the Glenwood Hot Springs’ mineral water is the Yampah spring which produces over 3.5 million gallons of water per day at a temperature of 122°F."
    },{
        "name": "Horsetooth Reservoir",
        "photograph": "https://www.larimer.org/sites/default/files/02_horsetooth_reservoir_01_by_jeanie_sumrall-ajero.jpg",
        "state": "Colorado",
        "description": " Located in the foothills west of Fort Collins at an elevation of 5,430 feet, Horsetooth Reservoir is 1,900 acres of water surrounded by 2,000 acres of public land. It is popular for fishing, boating, water-skiing, and camping."
    }, {
        "name": "Delicate Arch",
        "photograph": "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQHKRdjtF-kg5XH2jG8lA6NMR0ecUWTeuLirZzhttpyucYRsVyPloNPR58hHSIL_Pd5HSYV0Tt-I_ipnWZgtDmzYg",
        "state": "Utah",
        "description": "Delicate Arch is a 52-foot-tall freestanding natural arch located in Arches National Park, near Moab in Grand County, Utah, United States. The arch is the most widely recognized landmark in Arches National Park and is depicted on Utah license plates and a postage stamp commemorating Utah's centennial anniversary of admission to the Union in 1996. The Olympic torch relay for the 2002 Winter Olympics passed through the arch."
    }, {
        "name": "The Narrows",
        "photograph": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTAkXZO3_mkHaCisN81EEkaITKIdOKvkFTh1NF8G3XV8uwAceFvoj1EYZL1i3J8O4BWONOg8oYqRetOVG3VteAp-A",
        "state": "Utah",
        "description": "The Narrows is the narrowest section of Zion Canyon in Zion National Park, Utah, United States. Situated on the North Fork of the Virgin River and upstream of the main canyon, The Narrows is one of the premier hikes in the park and on the Colorado Plateau. The Narrows refers to both the 3.6-mile bottom-up hike from the Temple of Sinawava to Big Springs, as well as the 16-mile top-down hike from Chamberlain's Ranch back to the Temple of Sinawava."
    }, {
        "name": "Aniakchak National Monument and Preserve",
        "photograph": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO_Ahxnu4sP_35B4ZmxbC7uOzS2H7nkr8Evw&usqp=CAU",
        "state": "Alaska",
        "description": "The monument is centered on the mountains of the Aleutian Range and Aniakchak Crater. Given its remote location and challenging weather conditions, Aniakchak is one of the most wild and least visited places in the National Park System. This landscape is a vibrant reminder of Alaska's location in the volcanically active 'Ring of Fire,' as it is home to an impressive six mile (10 km) wide, 2,500 ft (762 m) deep caldera formed during a massive volcanic eruption 3,500 years ago."
    }
])


Post.create!([
    {
    "title": "Yosemite Trip",
    "photograph": "https://scontent.feat1-1.fna.fbcdn.net/v/t39.30808-6/277801517_10209690979988909_4181329890951983214_n.jpg?stp=dst-jpg_s851x315&_nc_cat=102&ccb=1-5&_nc_sid=da31f3&_nc_ohc=0a2u45pPx80AX8ibuyl&_nc_oc=AQlZIfnuVh5oKubWy4E0wmjDyw7oWOOgmz4xIaedDElTNY83HHolbHR78KFj-gx-G40&tn=B6cWDPjtqpID9Euf&_nc_ht=scontent.feat1-1.fna&oh=00_AT-OcndSEuBF1HtpWq_TpKBHVIUmoSPBKDPSLGTffA7HBQ&oe=626319E4",
    "blurb": "Had so much fun playing (and head-standing) in the snow in Yosemite National Park.", 
    "destination_id": 1,
    "user_id": 1
    }, {
    "title": "Grand Canyon",
    "photograph": "https://scontent.feat1-1.fna.fbcdn.net/v/t39.30808-6/278042696_10209690979108887_5656466441476782989_n.jpg?stp=c28.0.314.313a_dst-jpg_p370x247&_nc_cat=101&ccb=1-5&_nc_sid=da31f3&_nc_ohc=_puJnlXPwosAX87sa9X&_nc_ht=scontent.feat1-1.fna&oh=00_AT8Qg5Yfcc7qA8mlRemNLiiFwivS6WGhb_MN_vDesyRdsw&oe=62630675",
    "blurb": "My first time exploring the Grand Canyon.. in snow boots!",
    "destination_id": 2,
    "user_id": 1}
])