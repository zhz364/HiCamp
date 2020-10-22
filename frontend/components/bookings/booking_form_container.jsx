import {connect} from 'react-redux';
import {createBooking} from "../../actions/booking_actions"
import {withRouter} from 'react-router-dom'
import BookingForm from "./booking_form";

const mstp = (state) =>{
    if (state.session.currentUser === null){
        return {
            currentUserId: undefined
        }
    }
    return {
        currentUserId: state.session.currentUser.id
    }
}

const mdtp = (dispatch) =>{
    return {
        createBooking: (booking) => dispatch(createBooking(booking))
    }
}

export default withRouter(connect(mstp,mdtp)(BookingForm))