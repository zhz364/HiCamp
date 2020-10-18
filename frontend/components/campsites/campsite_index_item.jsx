import React from "react";
import { Link } from 'react-router-dom';


class CampsiteIndexItem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
        <div className="campsite-item"> 
            <div className="campsite-item-image-div">
                this is campsite img
            </div>
            <div className="campsite-item-infor-div">
                <div className="campsite-name">
                    <span>{this.props.campsite.title}</span>
                </div>
                <p className="campsite-state">
                    {this.props.campsite.address}
                </p>
            </div>
        </div>
        )
    }
}

export default CampsiteIndexItem;