import { connect } from 'react-redux';
import {fetchSpots} from "../../actions/spot_actions"
import SpotIndex from "./spot_index"

const mstp = state => ({
    spots: Object.values(state.spots)
})

const mdtp = dispatch => ({
    fetchSpots: () => dispatch(fetchSpots)
})

export default connect(mstp,mdtp)(SpotIndex);
