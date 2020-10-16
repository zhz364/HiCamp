import React from "react"
import SignupContainer from "./session/signup_container"
import LoginContainer from './session/login_container';
import {Route,Link} from "react-router-dom"
import NavBarContainer from "./nav_bar/nav_bar_container"
import mainBodyContainer from "./main_body/main_body_container";
import CampsiteIndexContainer from "./campsites/campsite_index_container";

// import spotIndexContainer from"./spots/spot_index_container"
// import SpotShowContainer from "./spots/spot_show_container"
import { AuthRoute, ProtectedRoute } from '../util/route_util';



const App =() =>{
    return(
        <div>
            <Route path="/" component={NavBarContainer}/>
            <Route exact path="/" component={mainBodyContainer}/>
            <Route exact path="/campsites" component={CampsiteIndexContainer}/>
            {/* <React exact path="/spots/:spodId" component={SpotShowContainer}/> */}
            <AuthRoute path="/signup" component={SignupContainer} />
            <AuthRoute path="/login" component={LoginContainer} />
            {/* <Route path="/login" component={LoginContainer} />
            <Route path="/signup" component={SignupContainer}/> */}
        </div>
    )
    
}
export default App