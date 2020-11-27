import React from "react";

class ReviewIndexItem extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props)
        let userIcon = undefined
        let option = undefined
        
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
                            Create at: {this.props.review.created_at.slice(0,10)}
                        </div>  
                    </div>
                </div>
            </div>
        )
    }
}

export default ReviewIndexItem;