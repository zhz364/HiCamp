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
                            
                        </div>
                        <div className="spot-infor-div">
                            <div className="spot-name-div">
                                <h1>{this.props.spot.name}</h1>
                            </div>
                            <div>
                                <h1>{this.props.spot.camp_type}</h1>
                            </div>
                        </div>

                        <div className="user-infor-div">
                            <div className="user-img">

                            </div>
                            <div className="user-name">

                            </div>

                            <div className="spot-about">
                                
                            </div>

                        </div>

                        <div className="spot-check-table">
                            <div>
                                <span>Campsite</span>
                            </div>
                            <div>
                                <span>Essentials</span>
                            </div>
                            <div>
                                <span>Amenities</span>
                            </div>
                        </div>

                        <div className="spot-reviews-div">

                        </div>

                        <div className="spot-map-div">

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