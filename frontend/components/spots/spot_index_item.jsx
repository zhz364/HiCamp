import React from "react"

class SpotIndexItem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
        <div className="spot-index-item">{this.props.spot.title}</div>
        )
    }
}

export default SpotIndexItem;