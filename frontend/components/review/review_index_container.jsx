import {connect} from 'react-redux';
import ReviewIndex from './review_index';
import { fetchReviews } from '../../actions/review_actions';

const mstp = function(state,ownProps) {
    return{
        reviews: Object.values(state.entities.reviews),
        users: state.entities.users,
        currentUser: state.session.currentUser,
    }
}

const mdtp = dispatch => ({
    fetchReviews: (spotId)=> dispatch(fetchReviews(spotId)),
})

export default connect(mstp,mdtp)(ReviewIndex);