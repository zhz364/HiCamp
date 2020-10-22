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
        return (
            <div>
                {this.props.bookings.map((booking,idx)=>(
                    <BookingIndexItem key={idx} booking={booking}/>
                ))}
            </div>
        )
    }
}

export default BookingIndex;