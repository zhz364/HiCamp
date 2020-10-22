import React from "react";
import DayPickerInput from "react-day-picker/DayPickerInput"
// import 'react-day-picker/lib/style.css';

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
        this.handleDate = this.handleDate.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleDate(type){
        return(e) =>{
            this.setState({[type]:e.currentTarget.value})
            // console.log(Number(e.currentTarget.value.split("-").join("")))
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
        let y = arr1[0] - arr2[0];
        let m = arr1[1] - arr2[1];
        let d = arr1[2] - arr2[2];
        return y*365 + m*30 + d
        
    }

    handleSubmit(e){
        e.preventDefault();
        
        if(this.props.currentUserId === undefined){
            this.props.history.push("/login")
        }else{
            if( this.state.checkin_date && this.state.checkout_date){
                let start = this.state.checkin_date.split("-")
                let end = this.state.checkout_date.split("-")
                const temp = this.calDays(end,start) * this.props.spot.price
                this.setState({total_price: temp})
            }
            const newState = Object.assign({},this.state)
            this.props.createBooking(newState)
                .then(()=> this.props.history.push("/"))
        }

    }

  
    render(){
    
       
        return (
            <div className="booking-form-div">
                <div className="price-div">
                    <div>{this.props.spot.price}</div>
                    <div>per night</div>
                </div>

                <div className="booking-infor-div">
                    <div className="checkin-div">
                        <input type="date" className="day-input" placeholder="Check in" onChange={this.handleDate("checkin_date")}/>
                    </div>
                    <div className="checkout-div">
                        <input type="date" className="day-input" placeholder="Check out" onChange={this.handleDate("checkout_date")}/>
                    </div>

                    <div className="guests-div">
                        <div>Guests</div>
                        <button className="decrease" onClick={this.handleGuest("decrease")}><i>-</i></button>
                        <span>{this.state.nums_guest}</span>
                        <button className="increase" onClick={this.handleGuest("increase")}><i>+</i></button>
                    </div>
                    
                </div>

                <div><button onClick={this.handleSubmit}>Book</button></div>
            </div>
        )
    }

}

export default BookingForm;