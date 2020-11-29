import React from "react";
import ReviewIndexItem from "./review_index_item"
import CreateReviewFormContainer from "./create_review_form_container"

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
                <h2>Reviews</h2>
                <ul>
                    {this.props.reviews.map((review,idx)=>(
                        <ReviewIndexItem key={idx} 
                            review={review} 
                            users={Object.values(this.props.users)} 
                            currentUser={this.props.currentUser}
                            deleteReview={this.props.deleteReview}
                            spotId={this.props.spot.id}
                            updateReview={this.props.updateReview}/>
                    ))}
                </ul>
                <CreateReviewFormContainer/>
            </div>
        )
    }
}

export default ReviewIndex