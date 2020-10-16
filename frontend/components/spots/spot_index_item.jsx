import React from "react";
import { Link } from 'react-router-dom';


class SpotIndexItem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
        <div className="spot-index-item" style={{background: 'url("https://hipcamp-res.cloudinary.com/images/c_fill,f_auto,g_auto:subject,h_400,q_60,w_780/v1602804457/campground-photos/jdvjqakeams4jmpacpvv/caterra-c-s-land-1-paraiso-pavo-real-site-2.jpg")'}}> 
            {this.props.spot.title}
        </div>
        )
    }
}

export default SpotIndexItem;