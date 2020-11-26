import React from "react";

class ReviewIndex extends React.Component{
    constructor(props){
        super(props)
        // console.log(this.props.spot.id)
    }

    componentDidMount(){
        // this.props.fetchReviews(this.props.match.params.spotId);
    }

    render(){
        return(
            <div>
                reviewindex
            </div>
        )
    }
}

export default ReviewIndex