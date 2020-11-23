import React from "react";
// import DatePicker from "react-datepicker"
// import "react-datepicker/dist/react-datepicker.css";
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
        this.handleDate = this.handleDate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.calDays = this.calDays.bind(this);
        // this.today = this.today.bind(this)
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
            if( (this.state.checkin_date && this.state.checkout_date) && ((Number(this.state.checkout_date.split("-").join("")) - Number(this.state.checkin_date.split("-").join(""))) > 0) 
                && this.state.checkout_date !== this.state.checkin_date){
                let start = this.state.checkin_date.split("-")
                let end = this.state.checkout_date.split("-")
                const temp = this.calDays(end,start) * this.props.spot.price
                this.setState({total_price: temp})
            
                const newState = Object.assign({},this.state)
                this.props.createBooking(newState)
                    .then(()=> this.props.history.push(`/users/${this.props.currentUserId}/bookings`))
            }
        }
    }

    
    
    componentDidMount(){
        this.error = null
    }
  
    render(){
        
        let currPrice = null;
        this.error = null
        if (this.state.checkin_date && this.state.checkout_date){
            if((Number(this.state.checkout_date.split("-").join("")) - Number(this.state.checkin_date.split("-").join(""))) < 0
                || this.state.checkout_date === this.state.checkin_date){
                this.error = (
                    <div id="error">
                        Please select valid checkout date
                    </div>
                )
            }else{
                let start = this.state.checkin_date.split("-")
                let end = this.state.checkout_date.split("-")
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
                {/* <DatePicker/> */}
                <div className="booking-infor-div">
                    <div className="checkin-div">
                        <input type="date" className="day-input" min={0} onChange={this.handleDate("checkin_date")}/>
                    </div>
                    <div className="checkout-div">
                        <input type="date" className="day-input" placeholder="Check out" onChange={this.handleDate("checkout_date")}/>
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