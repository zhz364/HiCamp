import React from "react";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';



class BookingForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            user_id: this.props.currentUserId,
            spot_id: this.props.spot.id,
            checkin_date: undefined,
            checkout_date: undefined,
            nums_guest: 1,
            total_price: this.props.spot.price
        }
        this.handleDate = this.handleDate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.calDays = this.calDays.bind(this);
        this.changeCheckinDate = this.changeCheckinDate.bind(this)
        this.changeCheckoutDate = this.changeCheckoutDate.bind(this)
    }

    handleDate(type){
        return(e) =>{
            this.setState({[type]:e.currentTarget.value})
        }
    }

    changeCheckinDate(day){
        if (day !== undefined){
            this.setState({checkin_date:day})
            
        }
    }

    changeCheckoutDate(day){
        if (day !== undefined){
            this.setState({checkout_date:day})
        }
    }

    handleGuest(type){
        
        return()=>{
            if (type === "decrease" && this.state.nums_guest > 1){
                this.setState({nums_guest: this.state.nums_guest -1})
            }

            if (type === "increase" && this.state.nums_guest < this.props.spot.capacity){
                this.setState({nums_guest: this.state.nums_guest + 1})
            }

        }
    }

    calDays(arr1,arr2){
        let y = arr1[2] - arr2[2];
        let m = arr1[0] - arr2[0];
        let d = arr1[1] - arr2[1];
        return y*365 + m*30 + d
    }

    handleSubmit(e){
        e.preventDefault();
        
        if(this.props.currentUserId === undefined){
            this.props.history.push("/login")
        }else{
            if( (this.state.checkin_date && this.state.checkout_date) && (this.calDays(this.state.checkout_date.toLocaleDateString().split("/"),this.state.checkin_date.toLocaleDateString().split("/"))>0) 
                && this.state.checkout_date !== this.state.checkin_date){
                let start = this.state.checkin_date.toLocaleDateString().split("/")
                let end = this.state.checkout_date.toLocaleDateString().split("/")
                const temp = this.calDays(end,start) * this.props.spot.price
                this.setState({total_price: temp})
                const newState = Object.assign({},this.state)
                this.props.createBooking(newState)
                    .then(()=> this.props.history.push(`/users/${this.props.currentUserId}/bookings`))
            }
        }
    }

    validDates(){
        const co = this.state.checkout_date.toLocaleDateString().split("/");
        const ci = this.state.checkin_date.toLocaleDateString().split("/")

    }
    
    componentDidMount(){
        this.error = null
    }
  
    render(){
        let currPrice = null;
        this.error = null
        const today = new Date();
        if (this.state.checkin_date && this.state.checkout_date){
            if(this.state.checkout_date.toLocaleDateString() === this.state.checkin_date.toLocaleDateString()){
                this.error = (
                    <div id="error">
                        Please select valid checkout date
                    </div>
                )
            }else{
                let start = this.state.checkin_date.toLocaleDateString().split("/")
                let end = this.state.checkout_date.toLocaleDateString().split("/")
                const subTotal = this.calDays(end,start) * this.props.spot.price
                currPrice = (
                    <div id="currPrice">
                        <div id="subtotal">
                            Subtotal: 
                        </div>
                        <div></div>
                        <div></div>
                        <div>
                            ${subTotal}
                        </div>
                    </div>
                )
            }
        }

        return (
            <div className="booking-form-div">
                <div className="price-div">
                    <div className="price"><h4>${this.props.spot.price}</h4></div>
                    <div className="per-night">per night</div>
                </div>

                <div className="booking-infor-div">
                    <div className="checkin-div">
                        <div className="check">Check In</div>
                        <DayPickerInput inputProps={{ style: { width: 99, height: 40, border: "none",outline: 'none'} }}  dayPickerProps={{disabledDays: { before: new Date() }}} placeholder="Select Date" onDayChange={this.changeCheckinDate}/>
                    </div>
                    <div className="checkout-div">
                        <div className="check">Check Out</div>
                        <DayPickerInput inputProps={{ style: { width: 99, height: 40, border: "none",outline: 'none'} }} dayPickerProps={{ disabledDays: { before: this.state.checkin_date }}} placeholder="Select Date" onDayChange={this.changeCheckoutDate}/>
                    </div>

                    <div className="guests-div">
                        <div>Guests</div>
                        <div>
                            <button className="decrease" onClick={this.handleGuest("decrease")}><i>-</i></button>
                            <span>{this.state.nums_guest}</span>
                
                            <button className="increase" onClick={this.handleGuest("increase")}><i>+</i></button>
                        </div>
                    </div>
                </div>
                {currPrice}
                <div className="sub-button-div"><button className="sub-button" onClick={this.handleSubmit}>Book</button></div>
                {this.error}
            </div>
        )
    }

}

export default BookingForm;