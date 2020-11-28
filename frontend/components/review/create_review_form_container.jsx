import {connect} from 'react-redux';
import {createReview} from "../../actions/review_actions"
import {withRouter} from 'react-router-dom'
import CreateReviewForm from './create_review_form'


const mstp = (state) =>{
    if (state.session.currentUser === null){
        return {
            currentUserId: undefined
        }
    }
    return {
        currentUserId: state.session.currentUser.id
    }
}

const mdtp = (dispatch) =>{
    return {
        createReview: (review) => dispatch(createReview(review))
    }
}

export default withRouter(connect(mstp,mdtp)(CreateReviewForm))