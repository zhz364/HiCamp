import React from 'react';
import { Link } from 'react-router-dom';

class BookingIndexItem extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.props.fetchSpot(this.props.booking.spot_id)
    }
    
    handleSubmit(e){
        this.props.deleteBooking(this.props.booking.id)
    }
    
    render(){
        if (!this.props.spots[this.props.booking.spot_id]){
            return null;
        }
        let spot = this.props.spots[this.props.booking.spot_id]
        return (
            <div className="booking-index-item">
                <div>
                    <h4>{spot.name}</h4>
                </div>
                <div className="booking-index-item-infor">
                    <div>
                        <Link to={`/spots/${spot.id}`} ><img src={spot.photoUrl[0].photo}></img></Link>
                    </div>
                    <div>
                        <div>
                            Check in: {this.props.booking.checkin_date}
                        </div>
                        <div>
                            Check out: {this.props.booking.checkout_date}
                        </div>
                        <div>
                            Guests: {this.props.booking.nums_guest}
                        </div>
                        <div>
                            Total price: {this.props.booking.total_price}
                        </div>
                    </div>
                    <div className="cancel-btn-div">
                        <div></div>
                        <button onClick={this.handleSubmit}>Cancel Booking</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default BookingIndexItem;