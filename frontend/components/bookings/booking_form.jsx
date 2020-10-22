import React from "react";
import DayPickerInput from "react-day-picker/DayPickerInput"

class BookingForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            spot_id: this.props.spot.id,
            checkin_date: undefined,
            checkout_date: undefined,
            nums_guest: 0
        }
    }

    render(){
        if(this.props.currentUserId === undefined){
            return <div>
                {this.props.spot.name}
            </div>
        }
        return (
            <div className="booking-form-div">
                <div className="price-div">
                    <div>{this.props.spot.price}</div>
                    <div>per night</div>
                </div>

                <div className="booking-infor-div">
                    <div className="checkin-div">
                        <DayPickerInput placeholder="Check in"/>
                    </div>
                    <div className="checkout-div">
                        <DayPickerInput placeholder="Check out"/>
                    </div>

                    <div className="guests-div">
                        <div>Guests</div>
                        <button className="decrease"><i>-</i></button>
                        <span>{this.state.nums_guest}</span>
                        <button className="increase"><i>+</i></button>
                    </div>
                    
                </div>

                <div><button>Book</button></div>
            </div>
        )
    }

}

export default BookingForm;