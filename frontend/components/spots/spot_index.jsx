import SpotIndexItem from "./spot_index_item"
import React from "react"

class SpotIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        debugger
        this.props.fetchSpots();
    }

    render(){
        return(
            <div>
                <div>
                    {this.props.spots.map( spot => (
                        <div> 
                            <SpotIndexItem key={spot.id} spot={spot}/>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default SpotIndex;