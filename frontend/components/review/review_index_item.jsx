import React from "react";

class ReviewIndexItem extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props)
        let userIcon = undefined
        let option = undefined
        const dateOptions = { month: "long", day: "numeric", year: "numeric" };
        const date = new Date(this.props.review.created_at).toLocaleDateString("en-US", dateOptions); 
        
        return(
            <div className="reviews-index-div">
                {this.props.users.forEach(user => {
                    if (user.id === this.props.review.user_id){
                        userIcon = user.email
                    }
                })}
                <div className="auth-icon">
                        <img src={userIcon} />
                </div>
                <div className="review-div">
                    <div className="title">{this.props.review.title}</div>
                    <div className="body-time-div">
                        <div className="body" ><p>{this.props.review.body}</p></div>
                        <div className="time">
                            On {date}
                        </div>  
                    </div>
                </div>
            </div>
        )
    }
}

export default ReviewIndexItem;