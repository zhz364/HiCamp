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
            glamping:false,
            campingBorder: "1px solid rgba(0,0,0,0.1)",
            rvsiteBorder: "1px solid rgba(0,0,0,0.1)",
            glampingBorder: "1px solid rgba(0,0,0,0.1)"
        }
        this.results = []
        this.compareValues = this.compareValues.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.spotFilter = this.spotFilter.bind(this);
        this.renderAll = this.renderAll.bind(this);
    }

    componentDidMount(){
        window.scrollTo(0, 0)
        this.props.fetchSpots();
    }

    compareValues(n1,n2){
        return parseInt(n1) === parseInt(n2)
    }

    handleChange(type){
        let border = "";
        if(type === "camping"){
            border = "campingBorder"
        }else if(type === "rvsite"){
            border = "rvsiteBorder"
        }else{
            border = "glampingBorder"
        }

        if(this.state[type]){
            this.spotFilter(type)
            return() =>{
                this.setState({[type]:false,
                    [border]: "1px solid rgba(0,0,0,0.1)"})
            }
        }else{
            this.spotFilter(type)
            return() =>{
                this.setState({[type]:true,
                    [border]: "2px solid #40d9ac"})
            }
        }
        
    }

    spotFilter(type){
        if(this.state[type]){
            this.props.spots.forEach((spot)=>{
                if(spot.camp_type === type){
                    this.results.push(spot)
                }
            })
        }else{
            this.results.forEach((spot,idx)=>{
                if(spot.camp_type === type){
                    this.results.splice(idx, 1)
                }
            })
        }
    }

    renderAll(){
        this.results = [];
        this.props.spots.forEach((spot)=>{
            this.results.push(spot)
        })
    }


    render(){
        
        if (this.props.spots.length ===0 ){
            return null
        }
        const campId = this.props.campsiteId;
        let count = 0;
        let newSpots = []
        this.results = []
        return(
            <div className="main-body">
                <div className="spots-index">
                    <div className="spot-search-div">
                        <div className="spot-searchbar">
                            <div className="inner-div" style={{border: this.state.campingBorder}} onClick={this.handleChange("camping")}>
                                <span>Camping</span>
                            </div>
                            <div className="inner-div" style={{border: this.state.rvsiteBorder}} onClick={this.handleChange("rvsite")}>
                                <span>VR sites</span>
                            </div>
                            <div className="inner-div" style={{border: this.state.glampingBorder}} onClick={this.handleChange("glamping")}>
                                <span>Glamping</span>
                            </div> 
                        </div>
                    </div>
                    <div className="spot-index-div"> 
                        <div className="spot-div">
                            {(this.state.glamping === false && this.state.rvsite === false && this.state.camping === false) ?
                                this.renderAll() : null
                            }
                            
                            {this.results.map((spot,idx) => {
                                if(this.compareValues(spot.campsite_id,parseInt(campId))){
                                    count++;
                                    newSpots.push(spot)
                                    return <SpotIndexItem key={spot.id} spot={spot} idx={idx+1} fetchReviews={this.props.fetchReviews} reviews={this.props.reviews}/>
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