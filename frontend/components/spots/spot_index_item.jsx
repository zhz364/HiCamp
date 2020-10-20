import React from "react";
import { Link } from 'react-router-dom';

// style={{background: 'url("https://hipcamp-res.cloudinary.com/images/c_fill,f_auto,g_auto:subject,h_400,q_60,w_780/v1602804457/campground-photos/jdvjqakeams4jmpacpvv/caterra-c-s-land-1-paraiso-pavo-real-site-2.jpg")'}}
class SpotIndexItem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        // debugger
        return(
        <div className="spot-index-item" > 
            <div className="spot-img-div">
                <div className="slides">
                    <input type="radio" name={`${this.props.spot.id}-radio-btn`} id={`radio${this.props.spot.id}1`}/> 
                    <input type="radio" name={`${this.props.spot.id}-radio-btn`} id={`radio${this.props.spot.id}2`}/>
                    <input type="radio" name={`${this.props.spot.id}-radio-btn`} id={`radio${this.props.spot.id}3`}/> 
                    <div className="slide first">
                        <img src={`https://hicamp-seed.s3-us-west-1.amazonaws.com/spot${this.props.spot.id}1.jpg`}></img>
                    </div>
                    <div className="slide">
                        <img src={`https://hicamp-seed.s3-us-west-1.amazonaws.com/spot${this.props.spot.id}2.jpg`}></img>
                    </div>
                    <div className="slide">
                        <img src={`https://hicamp-seed.s3-us-west-1.amazonaws.com/spot${this.props.spot.id}3.jpg`}></img>
                    </div>
            </div>
                <div className="navigation-manual">
                    <label for={`radio${this.props.spot.id}1`} className="manual-btn"></label>
                    <label for={`radio${this.props.spot.id}2`} className="manual-btn"></label>
                    <label for={`radio${this.props.spot.id}3`} className="manual-btn"></label>
                </div>
            </div>
            
            <Link className="link" to={`/spots/${this.props.spot.id}`}>
                <div className="spot-foot-div"> 
                    <div className="name-type-div">
                        <div className="spot-name"><span>{this.props.spot.name}</span></div>
                        <div><img className="spot-icon" src="https://hicamp-seed.s3-us-west-1.amazonaws.com/spot-icon.png"></img></div>
                    </div>
                    <div className="thumb-price-div">
                        <div className="thumb">
                            <div className="thumbs-likes"><img className="thumbs-up-icon-div" src="https://cabins-seeds.s3.amazonaws.com/thumbs-up-green.svg" />   <span className="percentage">100%</span> - 777 Reviews</div>
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