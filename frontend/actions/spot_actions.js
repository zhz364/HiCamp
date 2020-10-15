export const RECEIVE_ALL_SPOTS = "RECEIVE_ALL_SPOTS";
export const RECEIVE_SPOT = "RECEIVESPOT";

import * as SpotUtil from "../util/spot_api_util"

export const receiveAllSpots = (spots) =>{
    return {
        type: RECEIVE_ALL_SPOTS,
        spots
    }
}

export const receiveSpot = (spot) =>{
    return {
        type: RECEIVE_SPOT,
        spot
    }
}

export const fetchSpots = () => dispath =>{
    return SpotUtil.fetchSpots()
        .then((spots)=>dispath(receiveAllSpots(spots)))
}

export const ffetchSpot = (id) => dispath =>{
    return PostApiUtil.fetchSpot(id)
        .then(spot => dispath(receiveSpot(spot)))
}