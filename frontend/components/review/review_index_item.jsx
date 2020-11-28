import React from "react";

class ReviewIndexItem extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        // console.log(this.props)
        let userIcon = undefined
        let delBtn = null
        const dateOptions = { month: "long", day: "numeric", year: "numeric" };
        const date = new Date(this.props.review.created_at).toLocaleDateString("en-US", dateOptions); 
        if(this.props.currentUser.id === this.props.review.user_id){
            delBtn = (<button onClick={() => this.props.deleteReview(this.props.review.id)}>Delete</button>)
        }
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
                        <div className="time-and-btns">
                            <div className="time">
                                On {date}
                            </div>  
                            {delBtn}
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default ReviewIndexItem;