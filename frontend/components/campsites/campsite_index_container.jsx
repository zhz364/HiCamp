import { connect } from 'react-redux';
import {fetchCampsites} from "../../actions/campsite_actions"
import CampsiteIndex from "./campsite_index"

const mstp = function(state,ownProps) {
    debugger
    return{
    campsites: Object.values(state.campsites)
    }
}

const mdtp = dispatch => ({
    fetchCampsites: () => dispatch(fetchCampsites())
})

export default connect(mstp,mdtp)(CampsiteIndex);
