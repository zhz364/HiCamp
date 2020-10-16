import {RECEIVE_ALL_CAMPSETS, RECEIVE_CAMPSET} from "../actions/campset_actions";

const campsitesReducer = (oldState = {}, action)=>{
  Object.freeze(oldState);
  let newState = Object.assign({},oldState);
  
  switch(action.type){
    case RECEIVE_ALL_CAMPSETS:
      return action.campsites
    case RECEIVE_CAMPSET:
      newState[action.campsite.id] = action.campsite
      return newState;
    default:
      return oldState
  }
}

export default campsetsReducer