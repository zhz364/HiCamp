import SpotIndexItem from "./spot_index_item"
import React from "react"

class SpotIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchSpots();
    }

    render(){
        return(
            <body className="main-body">
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
                        <div className="spot-index-map-div">
                                
                        </div>
                    </div>
                </div>

            </body>
        )
    }
}

export default SpotIndex;