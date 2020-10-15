# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Spot.destroy_all
demoUser = User.create(first_name:"zihao", last_name:"jian", username:"uzi", password:"123456", zip:1, email:"uzi@lpl.com" )
user1 = User.create(first_name:"zhang", last_name:"zhang", username:"z", password:"123456", zip:1, email:"z" )

spot1 = Spot.create(camp_type:"wtf", title:"yellow stone",img_url:"amazon", host_id:user1.id, price:99, capacity:5, latitude:44.46, longitude:-110.83, address:"Yellowstone National Park Yellowstone National Park, WY 82190-016", description:"awesome views")