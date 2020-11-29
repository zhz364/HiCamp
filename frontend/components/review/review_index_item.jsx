import React from "react";
import UpdateReviewFormContainer from "./update_review_form_container"
class ReviewIndexItem extends React.Component{
    constructor(props){
        super(props)
        this.state={
            update:false,
            id: this.props.review.id,
            user_id: this.props.currentUser.id,
            spot_id: this.props.spotId,
            title: this.props.review.title,
            body: this.props.review.body
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this)
    }
    
    handleUpdate(){
        if(this.state.update){
            this.setState({
                update: false
            })
        }else{
            this.setState({
                update: true
            })
        }
    }
    handleInput(type) {
        return (e) => this.setState({ [type]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const newState = Object.assign({}, this.state);
        this.props.updateReview(newState)
        this.setState({update:false})
    }

    render(){
        let userIcon = undefined
        let delBtn = null
        let updateBtn = null
        let update = null
        let cancelBtn =  null
        const dateOptions = { month: "long", day: "numeric", year: "numeric" };
        const date = new Date(this.props.review.created_at).toLocaleDateString("en-US", dateOptions); 
        if(this.props.currentUser.id === this.props.review.user_id){
            delBtn = (<button onClick={() => this.props.deleteReview(this.props.review.id)}>Delete</button>)
            updateBtn = (<button onClick={this.handleUpdate}>Update</button>) 
        }
        if(this.state.update){
            cancelBtn = <button onClick={this.handleUpdate}>Cancel</button>
            update = (<div>
                <h3>Edit an review</h3>
                <form className="create-review" onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleInput('title')}
                        type="text"
                        placeholder={this.state.title}
                        value={this.state.title}
                    />
                    <textarea
                        onChange={this.handleInput('body')}
                        placeholder={this.state.body}
                        value={this.state.body}
                    />
                    <div style={{display: "flex"}}>
                        <button disabled={!this.state.body} type="submit">Submit</button>
                        {cancelBtn}
                    </div>
                </form>
            </div>)
        }else{
            update = (<div className="review-div">
                <div className="title">{this.props.review.title}</div>
                <div className="body-time-div">
                    <div className="body" ><p>{this.props.review.body}</p></div>
                    <div className="time-and-btns">
                        <div className="time">
                            On {date}
                        </div>  
                        <div style={{display: "flex"}}>
                            {updateBtn}
                            {delBtn}
                        </div>
                    </div>
                </div>
            </div>)
            cancelBtn = null
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
                
                {update}
                
            </div>
        )
    }
}

export default ReviewIndexItem;