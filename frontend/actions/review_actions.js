import * as reviewUtil from '../util/review_api_util';

export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW'; 
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';
export const CLEAR_REVIEW_ERRORS = 'CLEAR_REVIEW_ERRORS'; 

const receiveAllReviews = (reviews) => ({
    type: RECEIVE_ALL_REVIEWS,
    reviews
});

const receiveReview = (review) => ({
    type: RECEIVE_REVIEW,
    review
});

const removeReview = (reviewId) => ({
    type: REMOVE_REVIEW,
    reviewId
});

const receiveErrors = (errors) => ({
    type: RECEIVE_REVIEW_ERRORS,
    errors
});

export const clearErrors = () => ({
    type: CLEAR_REVIEW_ERRORS
});

export const fetchReviews = (spotId) => (dispatch)=> {
    return reviewUtil.fetchReviews(spotId)
        .then((reviews) => dispatch(receiveAllReviews(reviews)), (errors) => dispatch(receiveErrors(errors.responseJSON)));
}

export const createReview = (review) => (dispatch) => {
    reviewUtil.createReview(review)
        .then((review) => dispatch(receiveReview(review)), (errors) => dispatch(receiveErrors(errors.responseJSON)));
}

export const updateReview = (review) => (dispatch) => { 
    reviewUtil.updateReview(review)
        .then((review) => dispatch(receiveReview(review)), (errors) => dispatch(receiveErrors(errors.responseJSON)));
}

export const deleteReview = (reviewId) => (dispatch) => {
    reviewUtil.deleteReview(reviewId)
        .then((review) => dispatch(removeReview(review.id)), (errors) => dispatch(receiveErrors(errors.responseJSON)));
}
