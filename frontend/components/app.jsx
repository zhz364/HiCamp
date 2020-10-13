import React from "react"
import SignupContainer from "./session/signup_container"
import LoginContainer from './session/login_container';
import {Route,Link} from "react-router-dom"
import NavBarContainer from "./nav_bar/nav_bar_container"


const App =() =>{
    return(
        <div>
            <Route path="/login" component={LoginContainer} />
            <Route path="/" component={NavBarContainer}/>
            <Route path="/signup" component={SignupContainer}/>
        </div>
    )
    
}
export default App