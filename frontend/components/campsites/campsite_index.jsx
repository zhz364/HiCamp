import CampsiteIndexItem from "./campsite_index_item"
import React from "react"

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
                    <CampsiteIndexItem key={campsite.id} campsite={campsite}/>
                ))}
            </div>
        )
    }
}

export default CampsiteIndex;