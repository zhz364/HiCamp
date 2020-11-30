import React from "react"
import SpotMap from "./spot_map"
import BookingFormContainer from "../bookings/booking_form_container"
import ReviewIndexContainer from "../review/review_index_container"

class SpotShow extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchSpot(this.props.match.params.spotId)
        this.props.fetchReviews(this.props.match.params.spotId)
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
        if (this.props.spot){
            return (
                <div className="spot-show-div">
                    <div className="spot-show-img-div">
                        <div>
                            <img className="first_pic" src={this.props.spot.photoUrl[0].photo}></img>
                        </div>
                        <div className="second-img-div">
                            <div>
                                <img className="sec-first" src={this.props.spot.photoUrl[1].photo}></img>
                            </div>
                            <div>
                                <img className="sec-sec" src={this.props.spot.photoUrl[2].photo}></img>
                            </div>
                        </div>
                    </div>
                    <div className="div-after-img">
                        <div className="left-div">
                            <div className="spot-infor-div">
                                <div className="spot-name-div">
                                    <h1>{this.props.spot.name}</h1>
                                </div>
                                <div className="thumb-div">
                                    <div>
                                        <p className="thumbs-likes"><img className="thumbs-up-icon-div" src="https://cabins-seeds.s3.amazonaws.com/thumbs-up-green.svg" />   <span className="percentage">100%</span> - {numReviews} Reviews</p>
                                    </div>
                                </div>
                            </div>

                            <div className="user-infor-div">
                                <div className="user-img">
                                    <img src="https://hicamp-seed.s3-us-west-1.amazonaws.com/uzi.jpg" />
                                </div>
                                <div className="user-name">
                                    <h5>Hosted by</h5>
                                    <h6>Uzi</h6>
                                </div>
                                <div className="spot-about">
                                    <p>{this.props.spot.description}</p>
                                </div>
                            </div>

                            <div className="spot-check-table">
                                <div>
                                    <span><h3>Campsite area</h3></span>
                                        <ul>
                                            <li><img src="https://hicamp-seed.s3-us-west-1.amazonaws.com/byo.png"></img>Bring your own tent</li>
                                            <li><img src="https://hicamp-seed.s3-us-west-1.amazonaws.com/vtc.png"></img>vans and truck camper</li>
                                            <li><img src="https://hicamp-seed.s3-us-west-1.amazonaws.com/sit.png"></img>1 sit</li>
                                            <li><img src="https://hicamp-seed.s3-us-west-1.amazonaws.com/gps.png"></img>Up to 7 guests per site</li>
                                            <li><img src="https://hicamp-seed.s3-us-west-1.amazonaws.com/gps.png"></img>Park at listin</li>
                                        </ul>
                                </div>
                                <div>
                                    <span><h3>Essentials</h3></span>
                                    <ul>
                                        <li><img src="https://hicamp-seed.s3-us-west-1.amazonaws.com/cf.png"></img>Campfires allowed</li>
                                        <li><img src="https://hicamp-seed.s3-us-west-1.amazonaws.com/toiletpaper.png"></img>Toilet available</li>
                                        <li><img src="https://hicamp-seed.s3-us-west-1.amazonaws.com/pet.png"></img>Pets allowed</li>
                                    </ul>
                                </div>
                                <div>
                                    <span><h3>Amenities</h3></span>
                                    <ul>
                                        <li><img src="https://hicamp-seed.s3-us-west-1.amazonaws.com/kitchen.png"></img>Kitchen available</li>
                                        <li><img src="https://hicamp-seed.s3-us-west-1.amazonaws.com/shower_a.png"></img>Showers available</li>
                                        <li><img src="https://hicamp-seed.s3-us-west-1.amazonaws.com/bins_a.png"></img>Bins available</li>
                                        <li><img src="https://hicamp-seed.s3-us-west-1.amazonaws.com/no_potable_w.png"></img>No potable water</li>
                                        <li><img src="https://hicamp-seed.s3-us-west-1.amazonaws.com/no_wifi.png"></img>No wifi</li>
                                    </ul>
                                </div>
                            </div>
                
                            <div className="spot-reviews-div">
                                <ReviewIndexContainer spot={this.props.spot}/>
                            </div>

                        </div>

                        <div className="side-booking-div">
                            <BookingFormContainer spot={this.props.spot}/>
                        </div>
                    </div>
                        
                    <div className="spot-map-div">
                        <SpotMap spot={this.props.spot}/>
                    </div>
                </div>
            )

        }else{
            return null
        }
    }
}


export default SpotShow