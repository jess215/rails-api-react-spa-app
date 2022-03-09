# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# LOCATIONS SEED #
Location.create(name:'Wendover Air Base', state:'Nevada', city:'Wendover', built:1940, rating:4)
Location.create(name:'Baron Woolen Mill', state:'Utah', city:'Brigham City', built:1869, rating:5)
Location.create(name:'Fort Douglas', state:'Utah', city:'Salt Lake City', built:1862, rating:5)
Location.create(name:'Benson Grist Mill', state:'Utah', city:'Stansbury Park', built:1851, rating:4)
Location.create(name:'Fort Bridger', state:'Wyoming', city:'Fort Bridger', built:1842, rating:2)
Location.create(name:'Ogden Union Station', state:'Utah', city:'Ogden', built:1924, rating:4)

### DRAGONS SEED ###
## CHROMATIC ##
# RED 
Dragon.create(variety:'Chomatic', color:'Red', element:'Fire', personality:'Greedy, arrogant, easily enraged, hold grudges, not subtle', alignment:'Chaotic Evil', age:'Adult', hp:253, cr:15)
Dragon.create(variety:'Chomatic', color:'Red', element:'Fire', personality:'Greedy, arrogant, easily enraged, hold grudges, not subtle', alignment:'Chaotic Evil', age:'Ancient', hp:527, cr:23)
Dragon.create(variety:'Chomatic', color:'Red', element:'Fire', personality:'Greedy, arrogant, easily enraged, hold grudges, not subtle', alignment:'Chaotic Evil', age:'Great Wyrm', hp:660, cr:26)

# BLUE
Dragon.create(variety:'Chomatic', color:'Blue', element:'Lightning', personality:'Vain, territorial, feel superior, amiable', alignment:'Lawful Evil', age:'Adult', hp:241, cr:11)
Dragon.create(variety:'Chomatic', color:'Blue', element:'Lightning', personality:'Vain, territorial, feel superior, amiable', alignment:'Lawful Evil', age:'Ancient', hp:445, cr:21)
Dragon.create(variety:'Chomatic', color:'Blue', element:'Lightning', personality:'Vain, territorial, feel superior, amiable', alignment:'Lawful Evil', age:'Great Wyrm', hp:565, cr:25)

# Green
Dragon.create(variety:'Chomatic', color:'Green', element:'Acid', personality:'Manipulative, deceptive, enjoys intrigue and trickery', alignment:'Lawful Evil', age:'Adult', hp:230, cr:13)
Dragon.create(variety:'Chomatic', color:'Green', element:'Acid', personality:'Manipulative, deceptive, enjoys intrigue and trickery', alignment:'Lawful Evil', age:'Ancient', hp:432, cr:21)
Dragon.create(variety:'Chomatic', color:'Green', element:'Acid', personality:'Manipulative, deceptive, enjoys intrigue and trickery', alignment:'Lawful Evil', age:'Great Wyrm', hp:551, cr:24)

# BLACK
Dragon.create(variety:'Chomatic', color:'Black', element:'Acid', personality:'Cowardly, violent, amphibious', alignment:'Chaotic Evil', age:'Adult', hp:199, cr:11)
Dragon.create(variety:'Chomatic', color:'Black', element:'Acid', personality:'Cowardly, violent, amphibious', alignment:'Chaotic Evil', age:'Ancient', hp:387, cr:19)
Dragon.create(variety:'Chomatic', color:'Black', element:'Acid', personality:'Cowardly, violent, amphibious', alignment:'Chaotic Evil', age:'Great Wyrm', hp:536, cr:22)

# WHITE
Dragon.create(variety:'Chomatic', color:'White', element:'Cold', personality:'Instinctive, brutal, direct, animalistic, holds grudges', alignment:'Chaotic Evil', age:'Adult', hp:189, cr:10)
Dragon.create(variety:'Chomatic', color:'White', element:'Cold', personality:'Instinctive, brutal, direct, animalistic, holds grudges', alignment:'Chaotic Evil', age:'Ancient', hp:375, cr:18)
Dragon.create(variety:'Chomatic', color:'White', element:'Cold', personality:'Instinctive, brutal, direct, animalistic, holds grudges', alignment:'Chaotic Evil', age:'Great Wyrm', hp:522, cr:21)

## METALLIC ##
# BRASS
Dragon.create(variety:'Metallic', color:'Brass', element:'Fire, Sleep', personality:'Placid, curious, talkative, slow to anger', alignment:'Chaotic Good', age:'Adult', hp:199, cr:12)
Dragon.create(variety:'Metallic', color:'Brass', element:'Fire, Sleep', personality:'Placid, curious, talkative, slow to anger', alignment:'Chaotic Good', age:'Ancient', hp:387, cr:20)
Dragon.create(variety:'Metallic', color:'Brass', element:'Fire, Sleep', personality:'Placid, curious, talkative, slow to anger', alignment:'Chaotic Good', age:'Great Wyrm', hp:536, cr:23)

# BRONZE
Dragon.create(variety:'Metallic', color:'Bronze', element:'Lightening, Gas', personality:'Sense of purpose, intollerant of fools, will not argue', alignment:'Lawful Good', age:'Adult', hp:241, cr:15)
Dragon.create(variety:'Metallic', color:'Bronze', element:'Lightening, Gas', personality:'Sense of purpose, intollerant of fools, will not argue', alignment:'Lawful Good', age:'Ancient', hp:445, cr:22)
Dragon.create(variety:'Metallic', color:'Bronze', element:'Lightening, Gas', personality:'Sense of purpose, intollerant of fools, will not argue', alignment:'Lawful Good', age:'Great Wyrm', hp:565, cr:25)

# COPPER
Dragon.create(variety:'Metallic', color:'Copper', element:'Acid, Gas', personality:'Quick-witted, clever, humorous, greedy', alignment:'Chaotic Good', age:'Adult', hp:210, cr:14)
Dragon.create(variety:'Metallic', color:'Copper', element:'Acid, Gas', personality:'Quick-witted, clever, humorous, greedy', alignment:'Chaotic Good', age:'Ancient', hp:400, cr:22)
Dragon.create(variety:'Metallic', color:'Copper', element:'Acid, Gas', personality:'Quick-witted, clever, humorous, greedy', alignment:'Chaotic Good', age:'Great Wyrm', hp:551, cr:25)

# GOLD
Dragon.create(variety:'Metallic', color:'Gold', element:'Fire, Gas', personality:'Believe in the greater good, arrogant, dismissive, feels superior', alignment:'Lawful Good', age:'Adult', hp:264, cr:16)
Dragon.create(variety:'Metallic', color:'Gold', element:'Fire, Gas', personality:'Believe in the greater good, arrogant, dismissive, feels superior', alignment:'Lawful Good', age:'Ancient', hp:542, cr:24)
Dragon.create(variety:'Metallic', color:'Gold', element:'Fire, Gas', personality:'Believe in the greater good, arrogant, dismissive, feels superior', alignment:'Lawful Good', age:'Great Wyrm', hp:717, cr:27)

# SILVER
Dragon.create(variety:'Metallic', color:'Silver', element:'Cold, Gas', personality:'Champions of great causes, knightly, defend innocents, protective, honorable', alignment:'Lawful Good', age:'Adult', hp:253, cr:15)
Dragon.create(variety:'Metallic', color:'Silver', element:'Cold, Gas', personality:'Champions of great causes, knightly, defend innocents, protective, honorable', alignment:'Lawful Good', age:'Ancient', hp:459, cr:23)
Dragon.create(variety:'Metallic', color:'Silver', element:'Cold, Gas', personality:'Champions of great causes, knightly, defend innocents, protective, honorable', alignment:'Lawful Good', age:'Great Wyrm', hp:660, cr:26)
