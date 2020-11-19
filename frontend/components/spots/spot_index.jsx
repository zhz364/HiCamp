import SpotIndexItem from "./spot_index_item"
import React from "react"
import SpotsMap from "./spots_map"

class SpotIndex extends React.Component{
    constructor(props){
        super(props)
        this.compareValues = this.compareValues.bind(this)
    }

    componentDidMount(){
        this.props.fetchSpots();
    }

    compareValues(n1,n2){
        return parseInt(n1) === parseInt(n2)
    }

    render(){
        if (this.props.spots.length ===0 ){
            return null
        }
        const campId = this.props.campsiteId;
        let count = 0;
        let newSpots = []
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
                            {this.props.spots.map( (spot,idx) => {
                                // debugger
                                if(this.compareValues(spot.campsite_id,parseInt(campId))){
                                    // debugger
                                    count++;
                                    newSpots.push(spot)
                                    return <SpotIndexItem key={spot.id} spot={spot} idx={idx+1}/>
                                }

                            })}
                        </div>
                        {count === 0 ? <div>sorry</div> : null}
                        <div className="spots-index-map-div">
                            <SpotsMap spots={newSpots}/>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default SpotIndex;