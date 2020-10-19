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
                        <div className="spot-img-div">
                            <h1>This is image box</h1>
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
                                                <li>Bring your own tent</li>
                                                <li>vans and truck camper</li>
                                                <li>1 sit</li>
                                                <li>Up to 7 guests per site</li>
                                                <li>Park at listin</li>
                                                <li>No ADA acces</li>
                                            </ul>
                                    </div>
                                    <div>
                                        <span><h3>Essentials</h3></span>
                                        <ul>
                                            <li>Campfires allowed</li>
                                            <li>Toilet available</li>
                                            <li>Toilet available</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <span><h3>Amenities</h3></span>
                                        <ul>
                                            <li>Kitchen available</li>
                                            <li>Showers available</li>
                                            <li>Picnic table available</li>
                                            <li>Bins available</li>
                                            <li>No potable water</li>
                                            <li>No wifi</li>
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