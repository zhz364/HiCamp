import SpotIndexItem from "./spot_index_item"
import React from "react"
import SpotsMap from "./spots_map"

class SpotIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchSpots();
    }

    render(){
        if (this.props.spots.length ===0 ){
            return null
        }
        return(
            <div className="main-body">
                <div className="spots-index">
                    <div>
                        
                    </div>
                    <div className="spot-search-div">
                        <div className="spot-searchbar">
                            <div className="inner-div">
                                <span>Camping</span>
                            </div>
                            <div className="inner-div">
                                <span>VR sites</span>
                            </div>
                            <div className="inner-div">
                                <span>Glamping</span>
                            </div>
                        </div>
                    </div>
                    <div className="spot-index-div"> 
                        <div className="spot-div">
                            {this.props.spots.map( (spot,idx) => (
                                <SpotIndexItem key={spot.id} spot={spot} idx={idx+1}/>
                            ))}
                        </div>
                        <div className="spots-index-map-div">
                            <SpotsMap spots={this.props.spots}/>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default SpotIndex;