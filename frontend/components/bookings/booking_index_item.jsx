import React from 'react';

class BookingIndexItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                {this.props.booking.id}
            </div>
        )
    }
}

export default BookingIndexItem