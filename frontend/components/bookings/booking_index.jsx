import React from "react"
import BookingIndexItem from "./booking_index_item"

class BookingIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchBookings(this.props.currentUserId);
    }
    render(){
        let nums_booking = <div>
            <div>{this.props.bookings.length} bookings</div>
        </div>;
        
        return (
            <div className="booking_index_div">
                <div className="nums_booking">
                    {nums_booking}
                </div>
                <div className="booking_index_div">
                    {this.props.bookings.map((booking,idx)=>(
                        <BookingIndexItem key={idx} booking={booking} fetchSpot={this.props.fetchSpot} spots={this.props.spots} deleteBooking={this.props.deleteBooking}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default BookingIndex;