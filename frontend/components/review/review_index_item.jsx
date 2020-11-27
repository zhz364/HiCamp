import React from "react";

class ReviewIndexItem extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props)
        let userIcon = undefined
        return(
            <div>
                {this.props.users.forEach(user => {
                    if (user.id === this.props.review.user_id){
                        userIcon = <div> {user.email}</div>
                    }
                })}
                <div>
                    {userIcon}
                    <div>{this.props.review.title}</div>
                    <div>{this.props.review.body}</div>
                </div>
            </div>
        )
    }
}

export default ReviewIndexItem;