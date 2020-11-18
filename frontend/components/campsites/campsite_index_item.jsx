import React from "react";
import { Link } from 'react-router-dom';


class CampsiteIndexItem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
        <Link className="link" to={`/campsites/${this.props.campsite.id}`}><div className="campsite-item"> 
            <div className="campsite-item-image-div">
                <img src={this.props.campsite.photoUrl}></img>
            </div>
            <div className="campsite-item-infor-div">
                <div className="campsite-name">
                    <span>{this.props.campsite.title}</span>
                </div>
                <p className="campsite-state">
                    {this.props.campsite.address}
                </p>
            </div>
        </div></Link>
        )
    }
}

export default CampsiteIndexItem;