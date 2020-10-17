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
            <div>
                <h4>Find your next getaway</h4>
                <div className="campsites-index">
                    {this.props.campsites.map( campsite => (
                        <Link className="link" to="/spots"><CampsiteIndexItem key={campsite.id} campsite={campsite}/> </Link>
                        
                    ))}
                </div>
            </div>
        )
    }
}

export default CampsiteIndex;