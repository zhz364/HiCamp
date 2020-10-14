import {
    RECEIVE_CURRENT_USER,
    RECEIVE_SESSION_ERRORS,
    CLEAR_ERROR
} from "../actions/session_actions";

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return {};
        case RECEIVE_SESSION_ERRORS: 
            return action.payload.responseJSON;
        case CLEAR_ERROR:
            return [];
        default:
            return state;
    }
};
