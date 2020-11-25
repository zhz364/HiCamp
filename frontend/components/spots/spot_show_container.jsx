import { connect } from 'react-redux';
import {fetchSpot} from "../../actions/spot_actions"
import SpotShow from "./spot_show"

const mstp = function(state, ownProps){
    return{
        spot: state.spots[ownProps.match.params.spotId]
    }
}

const mdtp = dispath =>({
    fetchSpot: spotId =>dispath(fetchSpot(spotId))
})

export default connect(mstp,mdtp)(SpotShow);
