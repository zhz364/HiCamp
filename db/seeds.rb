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
demoUser = User.create(first_name:"zihao", last_name:"jian", username:"uzi", password:"123456", zip:1, email:"uzi@lpl.com" )
user1 = User.create(first_name:"zhang", last_name:"zhang", username:"z", password:"123456", zip:1, email:"z" )

campsite1 = Campsite.create(title:"Rocky Mountain",img_url:"ss", latitude:44.46, longitude:-110.83, address:"Yellowstone National Park Yellowstone National Park, WY 82190-016", description:"Colorado")
campsite2 = Campsite.create(title:"White Mountains",img_url:"amazon", latitude:44.46, longitude:-110.83, address:"Yellowstone National Park Yellowstone National Park, WY 82190-016", description:"New Hampshire")
campsite3 = Campsite.create(title:"Yosemite",img_url:"amazon", latitude:44.46, longitude:-110.83, address:"Yellowstone National Park Yellowstone National Park, WY 82190-016", description:"California")
campsite4 = Campsite.create(title:"Great Smoky Mountains",img_url:"amazon", latitude:44.46, longitude:-110.83, address:"Yellowstone National Park Yellowstone National Park, WY 82190-016", description:"Tennessee")
campsite5 = Campsite.create(title:"The Catskills",img_url:"amazon", latitude:44.46, longitude:-110.83, address:"Yellowstone National Park Yellowstone National Park, WY 82190-016", description:"New York")
campsite6 = Campsite.create(title:"Big Bend",img_url:"amazon", latitude:44.46, longitude:-110.83, address:"Yellowstone National Park Yellowstone National Park, WY 82190-016", description:"Texas")


spot1 = Spot.create(name:"zz", camp_type:"camping",img_url:"amazon", state_location:"ca",host_id:demoUser.id,campsite_id:campsite1.id,price:11,capacity:5,longitude:1.11,latitude:13.14,description:"about")
spot2 = Spot.create(name:"pdd", camp_type:"camping",img_url:"amazon", state_location:"ca",host_id:demoUser.id,campsite_id:campsite1.id,price:11,capacity:5,longitude:1.11,latitude:13.14,description:"about")
