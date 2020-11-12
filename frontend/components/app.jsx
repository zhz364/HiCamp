import React from "react"
import SignupContainer from "./session/signup_container"
import LoginContainer from './session/login_container';
import {Route} from "react-router-dom"
import NavBarContainer from "./nav_bar/nav_bar_container"
import mainBodyContainer from "./main_body/main_body_container";
import BookingIndexContainer from "./bookings/booking_index_container";
import SpotIndexContainer from "./spots/spot_index_container";
import SpotShowContainer from "./spots/spot_show_container"
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Footer from "./footer"



const App =() =>{
    return(
        <div>
            <Route path="/" component={NavBarContainer}/>
            <Route exact path="/users/:userId/bookings" component={BookingIndexContainer}/>
            <Route exact path="/" component={mainBodyContainer}/>
            <Route exact path="/spots/:spotId" component={SpotShowContainer} />
            {/* <Route exact path="/campsites/:campsiteId" component={SpotIndexContainer}/> */}
            <Route exact path="/spots" component={SpotIndexContainer}/>
            <AuthRoute path="/signup" component={SignupContainer} />
            <AuthRoute path="/login" component={LoginContainer} />
            <Footer/>
        </div>
    )
    
}
export default App