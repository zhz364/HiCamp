import React from "react"

class SpotIndexItem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
        <div>{this.props.spot.title}</div>
        )
    }
}

export default SpotIndexItem;