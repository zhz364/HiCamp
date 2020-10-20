import React from "react"

class SpotShow extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchSpot(this.props.match.params.spotId)
    }

    render(){
        if (this.props.spot){
            return (
                <body>
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
                                            <p className="thumbs-likes"><img className="thumbs-up-icon-div" src="https://cabins-seeds.s3.amazonaws.com/thumbs-up-green.svg" />   <span className="percentage">100%</span> - 777 Reviews</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="user-infor-div">
                                    <div className="user-img">
                                        <img src="https://imgsa.baidu.com/forum/w%3D580/sign=78c00c8c59fbb2fb342b581a7f4b2043/259eb212c8fcc3cee2d3cde29e45d688d53f2059.jpg" />
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
                                    <h1>This is reviews</h1>
                                </div>

                            </div>

                            <div className="side-booking-div">
                                <div className="booking-div">
                                    <h1>booking form</h1>
                                </div>
                            </div>
                        </div>
                         
                        <div className="spot-map-div">
                                <h1>This is map</h1>
                        </div>

                    </div>
                </body>
            )

        }else{
            return null
        }
    }
}


export default SpotShow