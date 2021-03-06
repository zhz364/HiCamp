import React from "react";
import { Link } from 'react-router-dom';

class SpotIndexItem extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchReviews(this.props.spot.id)
    }

    render(){
        let numReviews = 0
        if(this.props.reviews.length > 0){
            this.props.reviews.forEach(review => {
                if(review.spot_id === this.props.spot.id){
                    numReviews +=1
                }
            });
        }
        return(
        <div className="spot-index-item" > 
            <div className="spot-img-div">
                <div className="slides">
                    <input type="radio" name={`${this.props.spot.id}-radio-btn`} id={`radio${this.props.idx}1`}/> 
                    <input type="radio" name={`${this.props.spot.id}-radio-btn`} id={`radio${this.props.idx}2`}/>
                    <input type="radio" name={`${this.props.spot.id}-radio-btn`} id={`radio${this.props.idx}3`}/> 
                    <div className="slide first">
                        <img src={this.props.spot.photoUrl[0].photo}></img>
                    </div>
                    <div className="slide">
                        <img src={this.props.spot.photoUrl[1].photo}></img>
                    </div>
                    <div className="slide">
                        <img src={this.props.spot.photoUrl[2].photo}></img>
                    </div>
                </div>
                <div className="navigation-manual">
                    <label htmlFor={`radio${this.props.idx}1`} className="manual-btn"></label>
                    <label htmlFor={`radio${this.props.idx}2`} className="manual-btn"></label>
                    <label htmlFor={`radio${this.props.idx}3`} className="manual-btn"></label>
                </div>
            </div>
            
            <Link className="link" to={`/spots/${this.props.spot.id}`}>
                <div className="spot-foot-div"> 
                    <div className="name-type-div">
                        <div className="spot-name"><span>{this.props.spot.name}</span></div>
                        <div><img className="spot-icon" src={`https://hicamp-seed.s3-us-west-1.amazonaws.com/${this.props.spot.camp_type}.png`}></img></div>

                    </div>
                    <div className="thumb-price-div">
                        <div className="thumb">
                            <div className="thumbs-likes">
                                <img className="thumbs-up-icon-div" src="https://cabins-seeds.s3.amazonaws.com/thumbs-up-green.svg" />   
                                <div className="percentage">100% </div> 
                                <div className="reviews">{numReviews} Reviews </div>
                            </div>
                        </div>
                        <div className="spot-price"><span>${this.props.spot.price} / Night</span></div>
                    </div>
                </div>  
            </Link>
            
        </div>
        )
    }
}

export default SpotIndexItem;