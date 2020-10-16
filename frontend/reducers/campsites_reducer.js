import {RECEIVE_ALL_CAMPSITES, RECEIVE_CAMPSITE} from "../actions/campsite_actions";

const campsitesReducer = (oldState = {}, action)=>{
  Object.freeze(oldState);
  let newState = Object.assign({},oldState);
  
  switch(action.type){
    case RECEIVE_ALL_CAMPSITES:
      return action.campsites
    case RECEIVE_CAMPSITE:
      newState[action.campsite.id] = action.campsite
      return newState;
    default:
      return oldState
  }
}

export default campsitesReducer