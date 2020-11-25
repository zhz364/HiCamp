import React from "react"
import { Link } from "react-router-dom";
import BookingIndexItem from "./booking_index_item"

class BookingIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchBookings(this.props.currentUserId);
    }
    
    render(){
        let nums_booking;
        if(this.props.bookings.length === 0){
            nums_booking = <div>
            <div className="no-bookings"> <span style={{color:"GrayText"}}>You don't have any booking.</span>  
            <div><Link to="/" className="link">Let's get you outside!</Link></div>
            </div>
        </div>;
        }else{
            nums_booking = <div>
            <div>{this.props.bookings.length} bookings</div>
        </div>;
        
        }
        
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