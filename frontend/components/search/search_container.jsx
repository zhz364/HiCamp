import {connect} from 'react-redux';
import Search from './search';
import {fetchCampsites} from "../../actions/campsite_actions"

const mstp = function(state) {
    return{
        campsites: Object.values(state.campsites)
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchCampsites: () => dispatch(fetchCampsites())
})

export default connect(mstp, mapDispatchToProps)(Search);