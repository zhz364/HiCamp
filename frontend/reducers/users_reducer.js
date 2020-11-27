import {RECEIVE_CURRENT_USER} from "../actions/session_actions";
import { RECEIVE_ALL_USERS, RECEIVE_USER } from '../actions/user_action';



export default (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({},state)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            nextState[action.payload.id] = action.payload;
            return nextState;
        case RECEIVE_ALL_USERS:
            return action.users;
        case RECEIVE_USER:
            return nextState[action.payload.id] = action.payload;
        default:
            return state;
    }
};