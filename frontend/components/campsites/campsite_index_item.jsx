import React from "react";
import { Link } from 'react-router-dom';


class CampsiteIndexItem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
        <div> 
            {this.props.campsite.title}
        </div>
        )
    }
}

export default CampsiteIndexItem;