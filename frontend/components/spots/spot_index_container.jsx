import { connect } from 'react-redux';
import {fetchSpots} from "../../actions/spot_actions"
import SpotIndex from "./spot_index"

const mstp = (state, ownProps) => {
    return {
        spots: Object.values(state.spots),
        campsiteId: ownProps.match.params.campsiteId
    }
    
}

const mdtp = dispatch => ({
    fetchSpots: () => dispatch(fetchSpots())
})

export default connect(mstp,mdtp)(SpotIndex);
