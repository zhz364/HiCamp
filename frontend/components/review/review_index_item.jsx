import React from "react";

class ReviewIndexItem extends React.Component{
    constructor(props){
        super(props)
        debugger
    }
    render(){
        // console.log(this.props.review)
        return(
            <div>
                <div>{this.props.review.title}</div>
                <div>{this.props.review.body}</div>
            </div>
        )
    }
}

export default ReviewIndexItem;