# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Campsite.destroy_all
demoUser = User.create(first_name:"zihao", last_name:"jian", username:"uzi", password:"123456", zip:1, email:"uzi@lpl.com" )
user1 = User.create(first_name:"zhang", last_name:"zhang", username:"z", password:"123456", zip:1, email:"z" )

campsite1 = Campsite.create(title:"yellow stone",img_url:"ss", latitude:44.46, longitude:-110.83, address:"Yellowstone National Park Yellowstone National Park, WY 82190-016", description:"awesome views")
campsite2 = Campsite.create(title:"blue stone",img_url:"amazon", latitude:44.46, longitude:-110.83, address:"Yellowstone National Park Yellowstone National Park, WY 82190-016", description:"awesome views")
campsite3 = Campsite.create(title:"red stone",img_url:"amazon", latitude:44.46, longitude:-110.83, address:"Yellowstone National Park Yellowstone National Park, WY 82190-016", description:"awesome views")
campsite4 = Campsite.create(title:"white stone",img_url:"amazon", latitude:44.46, longitude:-110.83, address:"Yellowstone National Park Yellowstone National Park, WY 82190-016", description:"awesome views")
campsite5 = Campsite.create(title:"black stone",img_url:"amazon", latitude:44.46, longitude:-110.83, address:"Yellowstone National Park Yellowstone National Park, WY 82190-016", description:"awesome views")
campsite6 = Campsite.create(title:"green stone",img_url:"amazon", latitude:44.46, longitude:-110.83, address:"Yellowstone National Park Yellowstone National Park, WY 82190-016", description:"awesome views")
