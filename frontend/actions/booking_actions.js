import * as BookingUtil from "../util/booking_api_util";

export const RECEIVE_BOOKING = "RECEIVE_BOOKING";
export const DELETE_BOOKING = "DELETE_BOOKING";
export const RECEIVE_ALL_BOOKING = "RECEIVE_ALL_BOOKING";

const receiveAllBookings = (bookings) =>({
    type: RECEIVE_ALL_BOOKING,
    bookings
})

const receiveBooking = (booking) => ({
    type: RECEIVE_BOOKING,
    booking
})

const removeBooking = (bookingId) =>({
    type: DELETE_BOOKING,
    bookingId
})

export const fetchBookings = (userId) => dispath =>{
    return BookingUtil.fetchBookings(userId)
        .then((bookings)=>{
            dispath(receiveAllBookings(bookings))
        })
}

export const createBooking = (booking) => dispath =>{
    return BookingUtil.createBooking(booking)
        .then((booking)=>{
            dispath(receiveBooking(booking))
        })
}


export const deleteBooking = (bookingId) => dispath =>{
    return BookingUtil.deleteBooking(bookingId)
        .then(()=>{
            dispath(removeBooking(bookingId))
        })
}