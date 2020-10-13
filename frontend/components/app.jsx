import React from "react"
import SignupContainer from "./session/sigup_container"
import {Route} from "react-router-dom"

export default ()=>{
    return(
        <div>
            <Route path="/signup" component={SignupContainer}></Route>
        </div>
    )
}