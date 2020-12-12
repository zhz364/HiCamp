<p align="center"><img width="450" height="90" src="https://hicamp-seed.s3-us-west-1.amazonaws.com/hicamp2.PNG"></p>

HiCamp is a cool website for people who like camping and exploring a new spot before anyone else. <a href="https://hicamp-zz.herokuapp.com/#/">Click here for live demo.</a>

HiCamp a full stack <a href="https://www.hipcamp.com"> Hipcamp </a> clone. It is using Ruby on Rails backend framework, PostgreSQL as backend database, React-readux for interface and state management. Seeds data by using Amazon web services, and Google Maps API interactive with user.

## Table of Contents
- [Technologies](#technologies)
- [Languages](#languages)
- [Features](#features)
  * [Authentication](#authentication)
  * [Campsites](#campsites)
  * [Bookings](#bookings)
  * [Searching](#searching)
  * [Maps](#maps)
- [Future Directions](#future-directions)

## Technologies
- Ruby on Rails framework (backend)
- PostgreSQL database (backend)
- React (frontend)
- Redux (frontend)
- Amazon web services (frontend)

## Languages 
- Ruby
- JavaScript
- HTML5
- CSS3

## Features

### Authentication

<div>
    <img width="75%" src="https://hicamp-seed.s3-us-west-1.amazonaws.com/Login.gif">
</div>

- User can log in with exist account
- User can has option log in by clicking "demo user"
- User can sign up a new account by input information

### Campsites
Each campsite will have a display name, picture, and the state in which it is located. The user clicks on a campsite to display all available spaces for that campsite.
<div>
  <img width="75%" src="/app/assets/images/Campsites.gif">
</div>

### Bookings
After the user has chosen their preferred location, they can book based on check-in，check-out times, and number of people. In order to avoid unnecessary troubles, the earliest check-in date is "today", and the earliest check-out date can only be selected one day after the check-in time.
<div>
    <img width="75%" src="https://hicamp-seed.s3-us-west-1.amazonaws.com/booking.gif">
</div>

### Searching
Users can search for the name of a state in the search bar, and if there are campgrounds in that state, a drop-down box will appear showing the names of all possible states. For example, if you enter the letter c, Colorado and California will appear, and if you continue to enter the next letter "a", only California will continue to appear.
<div>
    <img width="75%" src="https://hicamp-seed.s3-us-west-1.amazonaws.com/searching.gif">
</div>
 
Here's how I implemented real-time search

 ```javascript
handleChange(e){
    e.preventDefault()
    const value = e.currentTarget.value
    let currAddress = []
    const stateNames = Object.keys(this.allCampsites)
    if(value !== ""){
      stateNames.forEach(name =>{
        if(name.toLowerCase().startsWith(value.toLowerCase())){
          currAddress.push(name)
        }
      })
      stateNames.forEach(name =>{
        if(name.toLowerCase() === value.toLowerCase()){
          this.setState(()=>({
            id: this.allCampsites[name]
          }))
        }
      })
      this.setState(()=>({
        address: currAddress,
        text: value,
        dropdown:true,
        id:null
      }))
    }else{
      this.setState(()=>({
        dropdown:false,
        text:""
    }))}
  }
 ```
### Maps
There are two types of maps, the first one will show all the spots in the same map and the user can click the mark, which will bring up the picture and name of the spot. This way the user can visually see where all the spots are in a particular campsite. 
<div>
    <img width="75%" src="https://hicamp-seed.s3-us-west-1.amazonaws.com/map1.gif">
</div>


The other one shows the location of a specific spot. Users can see more specifically the terrain and location around the spot
<div>
    <img width="75%" src="https://hicamp-seed.s3-us-west-1.amazonaws.com/map2.gif">
</div>

## Future Directions
In the future, I will add a chat function. This will increase the user-to-user interaction. For example, when you have doubts about a campground, you can communicate directly with the person who hosts that campground.

