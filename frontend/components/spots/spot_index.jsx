import SpotIndexItem from "./spot_index_item"
import React from "react"
import SpotsMap from "./spots_map"
import { Link } from 'react-router-dom';

class SpotIndex extends React.Component{
    constructor(props){
        super(props)
        this.state={
            camping:false,
            rvsite:false,
            glamping:false
        }
        this.results = []
        this.compareValues = this.compareValues.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount(){
        this.props.fetchSpots();
    }

    compareValues(n1,n2){
        return parseInt(n1) === parseInt(n2)
    }

    handleChange(type){
        if(this.state[type]){
            return() =>{
                this.setState({[type]:false})
            }
        }else{
            return() =>{
                this.setState({[type]:true})
            }
        }
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
                    <div className="spot-search-div">
                        <div className="spot-searchbar">
                            <div className="inner-div" onClick={this.handleChange("camping")}>
                                <span>Camping</span>
                            </div>
                            <div className="inner-div" onClick={this.handleChange("rvsite")}>
                                <span>VR sites</span>
                            </div>
                            <div className="inner-div" onClick={this.handleChange("glamping")}>
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
                        {count === 0 ? <div className="no-result-div">Looks like there were no search results. <Link to={`/`} >Try again</Link>.</div> : null}
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