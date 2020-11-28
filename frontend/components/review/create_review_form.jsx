import React from "react";
import { withRouter } from 'react-router-dom';

class CreateReviewForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            user_id: this.props.currentUserId,
            spot_id: this.props.match.params.spotId,
            title: "",
            body: " "
        }
       
    
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInput(type) {
        return (e) => this.setState({ [type]: e.currentTarget.value });
    }

    handleSubmit(event) {
        if(this.props.currentUserId === undefined){
            this.props.history.push("/login")
        }else{
            event.preventDefault();
            const newState = Object.assign({}, this.state);
            this.props.createReview(newState)
                .then(() => {
                this.setState({
                    title: "",
                    body: "", 
                });
            });
        }
    }
    render(){
        if (!this.props.currentUserId){
            return null
        }
        let error = undefined
        if (this.state.body === ""){
            error = <div>Review body can not be empty</div>
        }else{
            error = null
        }
        return(
            <div className="create-review-div">
                {error}
                <form onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleInput('title')}
                        type="text"
                        placeholder="Title"
                        value={this.state.title}
                    />
                
                    <textarea
                        onChange={this.handleInput('body')}
                        placeholder="Leave a review for this spot"
                        value={this.state.body}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }

}

export default withRouter(CreateReviewForm);