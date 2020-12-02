# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Campsite.destroy_all
Spot.destroy_all
Booking.destroy_all

demoUser = User.create(first_name:"zihao", last_name:"jian", username:"uzi", password:"123456", zip:1, email:"https://hicamp-seed.s3-us-west-1.amazonaws.com/uzi.jpg" )
user1 = User.create(first_name:"zhang", last_name:"zhang", username:"z", password:"123456", zip:1, email:"z" )
user2 = User.create(first_name:"z", last_name:"z", username:"test1", password:"123456", zip:1, email:"https://hicamp-seed.s3-us-west-1.amazonaws.com/userIcon.png" )

campsite1 = Campsite.create(title:"Rocky Mountain",img_url:"ss", latitude:44.46, longitude:-110.83, address:"Colorado", description:"With more than 100 peaks, 
                            this corner of the Rockies is chock-full of jaw-dropping vistas. Over 350 miles of hiking trails and 147 lakes are just begging to be explored. It earns bonus points for being open 24/7. Imagine catching a mountain sunrise 
                            next to bighorn sheep and bugling elk herds.Camping in the Rocky Mountains never disappoints. There are five scenic campgrounds, some with sites you can book up to six months in advance. Just keep in mind there are no RV hook-ups. You can find group sites 
                            at Glacier Basin Campground.", state:"Colorado")
campsite2 = Campsite.create(title:"White Mountains",img_url:"amazon", latitude:44.46, longitude:-110.83, address:"New Hampshire", description:"Affectionately known as WMNF, this Forest has 1,200 miles of trails, 23 campgrounds, 
                            and tons of ski areas. It’s no wonder it’s one of the most popular places to play outside east of the Mississippi.The area is home to the highest peak in the Northeastern United States. Part the of the Presidential Range, Mount Washington dominates the area at 6,288 feet. 
                            The particularly daring can attempt the 23-mile Presidential Traverse—a grueling haul across seven 4,000 foot peaks. These mountains have some of the worst weather on earth. In winter, the wind can hit 200 mph with temps as low as -47 °F, so maybe just don’t go in February. 
                            If the weather is bad, you can drive the Mount Washington Auto Road or ride the Mount Washington Cog Railway to reach the summit in style.",state:"New Hampshire")
campsite3 = Campsite.create(title:"Yosemite",img_url:"amazon", latitude:44.46, longitude:-110.83, address:"California", description:"Climbers worldwide know about the granite rock formations in the Sierra Nevada mountains: Half Dome, El Capitan. 
                            And the pros know that Yosemite camping is either a feat of advanced planning, or a willingness to wing it for same-day reservations. 
                            There are 13 campgrounds inside the park with varying availability. The car campgrounds like Upper Pines require a reservation year-round (they sell out months in advance). To be fair, the reason why they sell out so quickly is because of the breathtaking beauty of the park. 
                            Between the massive sequoia trees, the mountains and the waterfalls, it's understandable.", state:"California")
campsite4 = Campsite.create(title:"Great Smoky Mountains",img_url:"amazon", latitude:44.46, longitude:-110.83, address:"Tennessee", description:"The Great Smoky Mountain National Park sings the songs of country music herself with her rambling streams, 
                            ancient mountains, and remnants of true Southern Appalachian mountain culture. The park holds some of the most diverse plant and animal life in the lower 48 and endless trails in which to explore it. You can spend your days climbing through waterfalls, fishing for trout, bicycling 
                            under fall foliage, exploring historical sites, picnicking, and cabrewing (the holy union of beer and canoeing). At night you can ponder all this awesomeness under the light of southeastern stars. So pack up your guitar, strum some chords by the campfire, and maybe learn the words to 
                            'Rocky Top' while you are on top of that particular peak! AT through-hikers will grab their backcountry passes on the route, but section hikers have a lot more work", state:"Tennessee")
campsite5 = Campsite.create(title:"The Catskills",img_url:"amazon", latitude:44.46, longitude:-110.83, address:"New York", description:"The Catskill region of central New York harbors 98 peaks higher than 3,000 feet. Good luck trying to summit them all. You may need a few weeks for that.
                            Instead, why not focus on the most beautiful places to see? Kaaterskill Falls tumble 260 feet. This spot has been revered by nature lovers for centuries. Famous writers have found inspiration from these falls.
                            Slide Mountain is the highest peak in the park at 4,200 feet. A 4.1mile loop trail brings you the top and back. At that distance, you should spend an afternoon just for this trail. The views are absolutely worth it. Autumn is the best time for this hike.
                            At the top, expect to see a canvas of yellow, red, and orange in early October. For wintertime fun, there's Belleayre Mountain Ski Center. Strap on some skis for downhill or cross country adventures.", state:"New York")
campsite6 = Campsite.create(title:"Big Bend",img_url:"amazon", latitude:44.46, longitude:-110.83, address:"Texas", description:"At 801,163 acres in size, this Lone Star natural oasis is a crown jewel of the state. It ebbs and flows in elevation, 
                            getting as high as 7,832 feet in the Chisos Mountains and as low as 1,800 feet in the Rio Grande river valley, which makes for truly diverse hiking trails. Also, the park’s over 1,200 species of flora and fauna make Big Bend a mecca for biologist, anthropologists, and basically
                            anyone who appreciates Mother Nature’s bounty. Artifacts as old as 9,000 years old are regularly found in the park, as well. With over 1,000 miles of international boundary shared with Mexico along the Rio Grande River, Big Bend National Park exists also a symbol of how the outdoors can bring nations together.
                            Big Bend is particularly exciting for hikers and backpackers, who can choose between Chimneys Trail, Marufo Vega Trail.", state:"Texas")

campsite1.photo.attach(io: open("https://hicamp-seed.s3-us-west-1.amazonaws.com/campsite_rock_mountain.jpg"), filename:"campsite_rock_mountain.jpg")
campsite2.photo.attach(io: open("https://hicamp-seed.s3-us-west-1.amazonaws.com/campsite_white_mountains.jpg"), filename:"campsite_white_mountains.jpg")
campsite3.photo.attach(io: open("https://hicamp-seed.s3-us-west-1.amazonaws.com/campsite_yosemite.jpg"), filename:"campsite_yosemite.jpg")
campsite4.photo.attach(io: open("https://hicamp-seed.s3-us-west-1.amazonaws.com/campsite_great_smoky_mountain.jpg"), filename:"campsite_great_smoky_mountain.jpg")
campsite5.photo.attach(io: open("https://hicamp-seed.s3-us-west-1.amazonaws.com/campsite_the_catskills.jpg"), filename:"campsite_the_catskills.jpg")
campsite6.photo.attach(io: open("https://hicamp-seed.s3-us-west-1.amazonaws.com/campsite_big_bend.jpg"), filename:"campsite_big_bend.jpg")






spot1 = Spot.create(name:"Creekside Paradise", camp_type:"camping",img_url:"amazon", state_location:"Colorado",host_id:demoUser.id,campsite_id:campsite1.id,price:50,capacity:5,longitude:-105.6836,latitude:40.3428, description:"42 acres of land with a creek running through it surrounded by National Forest 20 minutes from Boulder or Nederland, 30 minutes from Estes Park and Rocky Mountain National park.")
spot2 = Spot.create(name:"Quiet Mountain Forest Near Boulder", camp_type:"camping",img_url:"amazon", state_location:"California",host_id:demoUser.id,campsite_id:campsite3.id,price:72,capacity:3,longitude:-118.007027,latitude: 37.021469,description:"Enjoy a beautiful, peaceful, quiet 40 acres in the mountains just 20 minutes from Boulder. The land includes grassy meadows, rock outcroppings, cliffs (with rock climbing),
                    breathtaking views, seasonal creeks, mature forests, and many opportunities for peace and seclusion.")
spot3 = Spot.create(name:"Folly Farm", camp_type:"glamping",img_url:"amazon", state_location:"New Hampshire",host_id:demoUser.id,campsite_id:campsite2.id,price:106,capacity:4,longitude:-76.8808,latitude:39.4340,description:"WELCOME TO FOLLY FARM... Boulder County's finest glamping experience!
                    Located just 25 miles from world famous Rocky Mountain National Park, 16 miles from #1 ranked town Boulder, and a quick three minute drive from quaint Lyons, home to two world famous music festivals: Rocky Grass and Rocky Mountain Folk Festival. Don't forget to bring your fly rod's and grab a tube.")
spot4 = Spot.create(name:"Cute Renovated Camper", camp_type:"camping",img_url:"amazon", state_location:"California",host_id:demoUser.id,campsite_id:campsite3.id,price:65,capacity:2,longitude:-110.5885,latitude:44.4280,description:"This recently renovated camper will be the perfect spot to escape the city, rest and camp out while still 
                    being close to accessible roads, restaurants, gas stations, coffee shops, etc. 15 minutes from Gross Reservoir, where you can paddle board (available for small rental fee from owners), kayak, canoe, fish and soak up the sun. 10 minutes from the amazing Walker ranch trail.")
spot5 = Spot.create(name:"A Little Red Cottage in the Woods", camp_type:"glamping",img_url:"amazon", state_location:"Colorado",host_id:demoUser.id,campsite_id:campsite1.id,price:90,capacity:5,longitude:-105.5936124,latitude:40.3999838, description:"Looking ahead, you can reserve Christmas/New Years and remember you'll be using the wood stove for heat ...and snuggle in for the holidays.")
spot6 = Spot.create(name:"Creekside Rock Haven", camp_type:"rvsite",img_url:"amazon", state_location:"Colorado",host_id:demoUser.id,campsite_id:campsite1.id,price:90,capacity:5,longitude:-105.6336124,latitude:40.3699838, description:"3 acres across road from Tarryall creek. Fishing access, Nice picnic area next to creek. ")
spot7 = Spot.create(name:"Vintage Rainbow Garden", camp_type:"rvsite",img_url:"amazon", state_location:"California",host_id:demoUser.id,campsite_id:campsite3.id,price:72,capacity:3,longitude:-118.895416,latitude: 36.440617,description:"Greetings Nature Lovers! We had an amazing 1st season, filled with amazing peeps who all contributed to making us lucky #12 in Cali!")
spot8 = Spot.create(name:"Full Circle Farm", camp_type:"glamping",img_url:"amazon", state_location:"California",host_id:demoUser.id,campsite_id:campsite3.id,price:85,capacity:3,longitude:-119.538330,latitude: 37.865101,description:"Brand new cedar 1 room rustic cabin with queen bed. Beatiful blue pine pitched ceiling with recessed lighting...very homey! Electicity.")
spot9 = Spot.create(name:"Meadow Camping at D Acres Farm", camp_type:"camping",img_url:"amazon", state_location:"New Hampshire",host_id:demoUser.id,campsite_id:campsite2.id,price:106,capacity:4,longitude:-71.500000,latitude:44.000000,description:"Located in rural Dorchester, NH, our four season camping consists of beautiful meadow space and 200 acre forest and farm.")
spot10 = Spot.create(name:"Wolf Swamp", camp_type:"rvsite",img_url:"amazon", state_location:"New Hampshire",host_id:demoUser.id,campsite_id:campsite2.id,price:89,capacity:4,longitude:-71.454391,latitude:43.008663,description:"Located in rural Dorchester, NH, our four season camping consists of beautiful meadow space and 200 acre forest and farm.")
spot11 = Spot.create(name:"Camping Off The Grid", camp_type:"camping",img_url:"amazon", state_location:"Tennessee",host_id:demoUser.id,campsite_id:campsite4.id,price:29,capacity:3,longitude:-120.538528,latitude:38.067783,description:"Hi folks, Call 1 hr before arrival, if possible.  Our camp at Barbour Farms is approximately 1.5 miles off of US Highway 79 (Dover Rd), and is a quiet peaceful 80 acre setting to take in nature.")
spot12 = Spot.create(name:"60's Surf Camper in Rockaway Beach!", camp_type:"rvsite",img_url:"amazon", state_location:"New York",host_id:demoUser.id,campsite_id:campsite5.id,price:90,capacity:2,longitude: -73.9902778,latitude:40.7183333,description:"Located in the heart of Rockaway Beach NYC, this vintage 1963 Shasta camper is perfect for a small getaway with a few pals to enjoy the sun and the surf!")
spot13 = Spot.create(name:"Deer Creek Lakeside", camp_type:"camping",img_url:"amazon", state_location:"Texas",host_id:demoUser.id,campsite_id:campsite6.id,price:69,capacity:2,longitude:-111.5033,latitude:40.4083,description:"Located at the end of an unpaved road and adjacent to a small lake. Two RV Hookups (50 amp and 30 amp) on the same pole just installed.")




spot1.photos.attach(io: open("https://hicamp-seed.s3-us-west-1.amazonaws.com/spot11.jpg"), filename:"spot11.jpg")
spot1.photos.attach(io: open("https://hicamp-seed.s3-us-west-1.amazonaws.com/spot12.jpg"), filename:"spot12.jpg")
spot1.photos.attach(io: open("https://hicamp-seed.s3-us-west-1.amazonaws.com/spot13.jpg"), filename:"spot13.jpg")

spot2.photos.attach(io: open("https://hicamp-seed.s3-us-west-1.amazonaws.com/spot21.jpg"), filename:"spot21.jpg")
spot2.photos.attach(io: open("https://hicamp-seed.s3-us-west-1.amazonaws.com/spot22.jpg"), filename:"spot22.jpg")
spot2.photos.attach(io: open("https://hicamp-seed.s3-us-west-1.amazonaws.com/spot23.jpg"), filename:"spot23.jpg")

spot3.photos.attach(io: open("https://hicamp-seed.s3-us-west-1.amazonaws.com/spot31.jpg"), filename:"spot31.jpg")
spot3.photos.attach(io: open("https://hicamp-seed.s3-us-west-1.amazonaws.com/spot32.jpg"), filename:"spot32.jpg")
spot3.photos.attach(io: open("https://hicamp-seed.s3-us-west-1.amazonaws.com/spot33.jpg"), filename:"spot33.jpg")

spot4.photos.attach(io: open("https://hicamp-seed.s3-us-west-1.amazonaws.com/spot41.jpg"), filename:"spot41.jpg")
spot4.photos.attach(io: open("https://hicamp-seed.s3-us-west-1.amazonaws.com/spot42.jpg"), filename:"spot42.jpg")
spot4.photos.attach(io: open("https://hicamp-seed.s3-us-west-1.amazonaws.com/spot43.jpg"), filename:"spot43.jpg")

spot5.photos.attach(io: open("https://hicamp-seed.s3-us-west-1.amazonaws.com/spot51.jpg"), filename:"spot51.jpg")
spot5.photos.attach(io: open("https://hicamp-seed.s3-us-west-1.amazonaws.com/spot52.jpg"), filename:"spot52.jpg")
spot5.photos.attach(io: open("https://hicamp-seed.s3-us-west-1.amazonaws.com/spot53.jpg"), filename:"spot53.jpg")

spot6.photos.attach(io: open("https://hicamp-seed.s3-us-west-1.amazonaws.com/spot61.jpg"), filename:"spot61.jpg")
spot6.photos.attach(io: open("https://hicamp-seed.s3-us-west-1.amazonaws.com/spot62.jpg"), filename:"spot62.jpg")
spot6.photos.attach(io: open("https://hicamp-seed.s3-us-west-1.amazonaws.com/spot63.jpg"), filename:"spot63.jpg")

spot7.photos.attach(io: open("https://hicamp-seed.s3-us-west-1.amazonaws.com/spot71.jpg"), filename:"spot71.jpg")
spot7.photos.attach(io: open("https://hicamp-seed.s3-us-west-1.amazonaws.com/spot72.jpg"), filename:"spot72.jpg")
spot7.photos.attach(io: open("https://hicamp-seed.s3-us-west-1.amazonaws.com/spot73.jpg"), filename:"spot73.jpg")

spot8.photos.attach(io: open("https://hicamp-seed.s3-us-west-1.amazonaws.com/spot81.jpg"), filename:"spot81.jpg")
spot8.photos.attach(io: open("https://hicamp-seed.s3-us-west-1.amazonaws.com/spot82.jpg"), filename:"spot82.jpg")
spot8.photos.attach(io: open("https://hicamp-seed.s3-us-west-1.amazonaws.com/spot83.jpg"), filename:"spot83.jpg")

spot9.photos.attach(io: open("https://hicamp-seed.s3-us-west-1.amazonaws.com/spot91.jpg"), filename:"spot91.jpg")
spot9.photos.attach(io: open("https://hicamp-seed.s3-us-west-1.amazonaws.com/spot92.jpg"), filename:"spot92.jpg")
spot9.photos.attach(io: open("https://hicamp-seed.s3-us-west-1.amazonaws.com/spot93.jpg"), filename:"spot93.jpg")

spot10.photos.attach(io: open("https://hicamp-seed.s3-us-west-1.amazonaws.com/spot101.jpg"), filename:"spot101.jpg")
spot10.photos.attach(io: open("https://hicamp-seed.s3-us-west-1.amazonaws.com/spot102.jpg"), filename:"spot102.jpg")
spot10.photos.attach(io: open("https://hicamp-seed.s3-us-west-1.amazonaws.com/spot103.jpg"), filename:"spot103.jpg")

spot11.photos.attach(io: open("https://hicamp-seed.s3-us-west-1.amazonaws.com/spot111.jpg"), filename:"spot111.jpg")
spot11.photos.attach(io: open("https://hicamp-seed.s3-us-west-1.amazonaws.com/spot112.jpg"), filename:"spot112.jpg")
spot11.photos.attach(io: open("https://hicamp-seed.s3-us-west-1.amazonaws.com/spot113.jpg"), filename:"spot113.jpg")


spot12.photos.attach(io: open("https://hicamp-seed.s3-us-west-1.amazonaws.com/spot121.jpg"), filename:"spot121.jpg")
spot12.photos.attach(io: open("https://hicamp-seed.s3-us-west-1.amazonaws.com/spot122.jpg"), filename:"spot122.jpg")
spot12.photos.attach(io: open("https://hicamp-seed.s3-us-west-1.amazonaws.com/spot123.jpg"), filename:"spot123.jpg")

spot13.photos.attach(io: open("https://hicamp-seed.s3-us-west-1.amazonaws.com/spot131.jpg"), filename:"spot131.jpg")
spot13.photos.attach(io: open("https://hicamp-seed.s3-us-west-1.amazonaws.com/spot132.jpg"), filename:"spot132.jpg")
spot13.photos.attach(io: open("https://hicamp-seed.s3-us-west-1.amazonaws.com/spot133.jpg"), filename:"spot133.jpg")

checkin = DateTime.new(2020,7,27)
checkout = DateTime.new(2020,7,28)

Booking.create(user_id: demoUser.id, spot_id: spot1.id, checkin_date: checkin, checkout_date: checkout, nums_guest: 1, total_price: 20)
Review.create(user_id: demoUser.id, spot_id: spot1.id,title:"test1",body:"this is a review")