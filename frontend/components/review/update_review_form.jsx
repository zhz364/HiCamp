import React from "react";

class UpdateReviewForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            id: this.props.review.id,
            user_id: this.props.currentUserId,
            spot_id: this.props.spotId,
            title: this.props.review.title,
            body: this.props.review.body
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInput(type) {
        return (e) => this.setState({ [type]: e.currentTarget.value });
    }

    handleSubmit(e) {
            e.preventDefault();
            const newState = Object.assign({}, this.state);
            this.props.updateReview(newState)
    }
    render(){
        return(
            <div>
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
                    <button disabled={!this.state.body} type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default UpdateReviewForm;