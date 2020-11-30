import { connect } from 'react-redux';
import {fetchSpot} from "../../actions/spot_actions"
import SpotShow from "./spot_show"
import { fetchReviews } from '../../actions/review_actions';

const mstp = function(state, ownProps){
    console.log(state)
    return{
        spot: state.spots[ownProps.match.params.spotId],
        reviews: Object.values(state.entities.reviews),
    }
}

const mdtp = dispath =>({
    fetchSpot: spotId =>dispath(fetchSpot(spotId)),
    fetchReviews: (spotId) => dispath(fetchReviews(spotId))
})

export default connect(mstp,mdtp)(SpotShow);
