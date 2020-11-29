import {connect} from "react-redux"
import UpdateReviewForm from "./update_review_form"
import { updateReview } from '../../actions/review_actions';

const mstp = function(state,ownProps) {
    
}

const mdtp = dispatch => ({
    updateReview: (review) => dispatch(updateReview(review))
})


export default connect(null,mdtp)(UpdateReviewForm);