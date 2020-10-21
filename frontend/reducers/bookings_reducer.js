import {RECEIVE_BOOKING, DELETE_BOOKING, RECEIVE_ALL_BOOKING } from "../actions/booking_actions"


const bookingsReducer = (oldState={}, action) =>{
    Object.freeze(oldState);
    let newState = Object.assign({},oldState);
    switch(action.type){
        case RECEIVE_ALL_BOOKING:
            action.bookings;
        case RECEIVE_BOOKING:
            newState = Object.assign({},oldState,{[action.booking.id]: action.booking});
            return newState;
        case DELETE_BOOKING:
            delete newState[action.bookingId];
            return newState
        default:
            return oldState
    }
}

export default bookingsReducer;