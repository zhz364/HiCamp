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
                <div className="spot-search-div">
                    This is search bar
                </div>
                <div className="spot-div">
                    {this.props.spots.map( spot => (
                        <SpotIndexItem key={spot.id} spot={spot}/>
                    ))}
                </div>
                <div className="spot-map-div">
                        This is map bar
                </div>

            </body>
        )
    }
}

export default SpotIndex;