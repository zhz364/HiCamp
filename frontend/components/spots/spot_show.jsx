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
                    <div>
                        <h1>{this.props.spot.name}</h1>
                    </div>
                </body>
            )

        }else{
            return null
        }
    }
}


export default SpotShow