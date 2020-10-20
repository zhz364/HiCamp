import React from 'react'

class SpotMap extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h1>This is map </h1>
                <h1>{this.props.spot.longitude}</h1>
                <h1>{this.props.spot.latitude}</h1>
            </div>
        )
    }
}

export default SpotMap;