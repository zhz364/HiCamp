import {RECEIVE_ALL_SPOTS, RECEIVE_SPOT} from "../actions/spot_actions";

const spotsReducer = (oldState = {}, action)=>{
  Object.freeze(oldState);
  let newState = Object.assign({},oldState);
  
  switch(action.type){
    case RECEIVE_ALL_SPOTS:
      return action.spots
    case RECEIVE_SPOT:
      newState[action.spot.id] = action.spot
      return newState;
    default:
      return oldState
  }
}

export default spotsReducer