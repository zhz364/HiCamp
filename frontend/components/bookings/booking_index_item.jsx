import React from 'react';

class BookingIndexItem extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        debugger
        this.props.fetchSpot(this.props.booking.spot_id)
    }
    
    handleSubmit(e){
        e.preventDefault();
        this.props.deleteBooking(this.props.booking.id)
    }

    render(){
        debugger
        if (!this.props.spots[this.props.booking.spot_id]){
            return null;
        }
        let spot = this.props.spots[this.props.booking.spot_id]
        return (
            <div>
                <div>
                    {spot.name}
                </div>
                <div>
                    <div>
                        <img src={spot.photoUrl[0].photo}></img>
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
                    <div>
                        <button onClick={this.handleSubmit}>Cancel Booking</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default BookingIndexItem;