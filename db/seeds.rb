# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
demoUser = User.create(first_name:"zihao", last_name:"jian", username:"uzi", password:"123456", zip:1, email:"uzi@lpl.com" )
z = User.create(first_name:"zhang", last_name:"zhang", username:"z", password:"123456", zip:1, email:"z" )