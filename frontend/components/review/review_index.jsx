import React from "react";

class ReviewIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchReviews(this.props.spot.id);
    }

    render(){
        console.log(this.props)
        return(
            <div>
                reviewindex
                <ul>

                </ul>
            </div>
        )
    }
}

export default ReviewIndex