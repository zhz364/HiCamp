import { connect } from 'react-redux';
import {fetchSpots} from "../../actions/spot_actions"
import SpotIndex from "./spot_index"
import { fetchReviews } from '../../actions/review_actions';

const mstp = (state, ownProps) => {
    return {
        spots: Object.values(state.spots),
        campsiteId: ownProps.match.params.campsiteId,
        reviews: Object.values(state.entities.reviews)
    }
    
}

const mdtp = dispatch => ({
    fetchSpots: () => dispatch(fetchSpots()),
    fetchReviews: (spotId) => dispatch(fetchReviews(spotId))
})

export default connect(mstp,mdtp)(SpotIndex);
