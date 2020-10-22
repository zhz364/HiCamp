import {connect} from 'react-redux';
import {fetchBookings,deleteBooking} from "../../actions/booking_actions"
import {fetchSpot} from "../../actions/spot_actions"
import {withRouter} from 'react-router-dom'
import BookingIndex from "./booking_index";

const mstp = (state) =>{
    return {
        currentUserId: state.session.currentUser.id,
        currentUser: state.session.currentUser,
        bookings: Object.values(state.entities.bookings),
        spots: state.spots

    }
  
}

const mdtp = (dispatch) =>{
    return {
        fetchBookings: (userId) => dispatch(fetchBookings(userId)),
        deleteBooking: (bookingId) => dispatch(deleteBooking(bookingId)),
        fetchSpot:(spotId) => dispatch(fetchSpot(spotId))
    }
}

export default withRouter(connect(mstp,mdtp)(BookingIndex))