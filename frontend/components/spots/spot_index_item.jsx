import React from "react"

class SpotIndexItem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
        <div>{this.props.spot}</div>
        )
    }
}

export default SpotIndexItem;