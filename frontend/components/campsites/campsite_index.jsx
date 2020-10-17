import CampsiteIndexItem from "./campsite_index_item";
import React from "react";
import { Link } from 'react-router-dom';


class CampsiteIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchCampsites();
    }

    render(){
        return(
            <div className="campsites-index">
                {this.props.campsites.map( campsite => (
                    <Link to="/spots"><CampsiteIndexItem key={campsite.id} campsite={campsite}/> </Link>
                    
                ))}
            </div>
        )
    }
}

export default CampsiteIndex;