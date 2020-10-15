import {RECEIVE_SPOT, RECEIVE_ALL_SPOTS} from "../actions/spot_actions";

const SpotsReducer = (oldState = {}, action)=>{
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

export default SpotsReducer