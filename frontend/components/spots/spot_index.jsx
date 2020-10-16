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
            <div className="spot-div">
                {this.props.spots.map( spot => (
                    <SpotIndexItem key={spot.id} spot={spot}/>
                ))}
            </div>
        )
    }
}

export default SpotIndex;