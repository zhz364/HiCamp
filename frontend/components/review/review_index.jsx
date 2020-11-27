import React from "react";
import ReviewIndexItem from "./review_index_item"

class ReviewIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchReviews(this.props.spot.id);
        this.props.fetchAllUsers()
    }

    render(){
        return(
            <div>
                reviewindex
                <ul>
                    {this.props.reviews.map((review,idx)=>(
                        <ReviewIndexItem key={idx} review={review}/>
                    ))}
                </ul>
            </div>
        )
    }
}

export default ReviewIndex