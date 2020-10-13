import React from "react"
import SignupContainer from "./session/signup_container"
import {Route,Link} from "react-router-dom"

const App =() =>{
    return(
        <div>
            <h1>HiCamp</h1>
            <Link to="/api/signup">Sign up</Link>
            <Route path="/signup" component={SignupContainer}/>
        </div>
    )
    
}
export default App