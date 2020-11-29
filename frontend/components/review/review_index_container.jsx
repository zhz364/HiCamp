import {connect} from 'react-redux';
import ReviewIndex from './review_index';
import { fetchReviews,deleteReview,updateReview } from '../../actions/review_actions';
import {fetchAllUsers} from '../../actions/user_action'

const mstp = function(state,ownProps) {
    return{
        reviews: Object.values(state.entities.reviews),
        users: state.entities.users,
        currentUser: state.session.currentUser,
    }
}

const mdtp = dispatch => ({
    fetchReviews: (spotId)=> dispatch(fetchReviews(spotId)),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
    updateReview: (review) => dispatch(updateReview(review))
})

export default connect(mstp,mdtp)(ReviewIndex);