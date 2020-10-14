import React from "react"
import SignupContainer from "./session/signup_container"
import LoginContainer from './session/login_container';
import {Route,Link} from "react-router-dom"
import NavBarContainer from "./nav_bar/nav_bar_container"
import welcomeContainer from "./nav_bar/welcome_bar_container";
import { AuthRoute, ProtectedRoute } from '../util/route_util';



const App =() =>{
    return(
        <div>
            <Route path="/" component={NavBarContainer}/>
            <Route exact path="/" component={welcomeContainer}/>
            <AuthRoute path="/signup" component={SignupContainer} />
            <AuthRoute path="/login" component={LoginContainer} />
            {/* <Route path="/login" component={LoginContainer} />
            <Route path="/signup" component={SignupContainer}/> */}
        </div>
    )
    
}
export default App