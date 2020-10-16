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

spot1 = Spot.create(camp_type:"wtf", title:"yellow stone",img_url:"https://hipcamp-res.cloudinary.com/images/c_fill,f_auto,g_auto:subject,h_400,q_60,w_780/v1602804457/campground-photos/jdvjqakeams4jmpacpvv/caterra-c-s-land-1-paraiso-pavo-real-site-2.jpg", host_id:user1.id, price:99, capacity:5, latitude:44.46, longitude:-110.83, address:"Yellowstone National Park Yellowstone National Park, WY 82190-016", description:"awesome views")
spot2 = Spot.create(camp_type:"wtf", title:"blue stone",img_url:"amazon", host_id:user1.id, price:199, capacity:5, latitude:44.46, longitude:-110.83, address:"Yellowstone National Park Yellowstone National Park, WY 82190-016", description:"awesome views")
spot3 = Spot.create(camp_type:"wtf", title:"red stone",img_url:"amazon", host_id:user1.id, price:990, capacity:5, latitude:44.46, longitude:-110.83, address:"Yellowstone National Park Yellowstone National Park, WY 82190-016", description:"awesome views")
spot4 = Spot.create(camp_type:"wtf", title:"white stone",img_url:"amazon", host_id:user1.id, price:909, capacity:5, latitude:44.46, longitude:-110.83, address:"Yellowstone National Park Yellowstone National Park, WY 82190-016", description:"awesome views")
spot5 = Spot.create(camp_type:"wtf", title:"black stone",img_url:"amazon", host_id:user1.id, price:919, capacity:5, latitude:44.46, longitude:-110.83, address:"Yellowstone National Park Yellowstone National Park, WY 82190-016", description:"awesome views")
spot6 = Spot.create(camp_type:"wtf", title:"green stone",img_url:"amazon", host_id:user1.id, price:991, capacity:5, latitude:44.46, longitude:-110.83, address:"Yellowstone National Park Yellowstone National Park, WY 82190-016", description:"awesome views")
