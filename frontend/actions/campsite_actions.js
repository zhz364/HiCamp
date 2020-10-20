export const RECEIVE_ALL_CAMPSITES = "RECEIVE_ALL_CAMPSITES";
export const RECEIVE_CAMPSITE = "RECEIVE_CAMPSITE";

import * as CampsetUtil from "../util/campsite_api_util"

export const receiveAllCampsites = (campsites) =>{
    return {
        type: RECEIVE_ALL_CAMPSITES,
        campsites
    }
}

export const receiveCampsite = (campsite) =>{
    return {
        type: RECEIVE_CAMPSITE,
        campsite
    }
}

export const fetchCampsites = () => dispath =>{
    return CampsetUtil.fetchCampsites()
        .then((campsites)=>{
            debugger
            dispath(receiveAllCampsites(campsites))
        })

}

export const fetchCampsite = (id) => dispath =>{
    return CampsetUtil.fetchCampsite(id)
        .then((campsite)=> dispath(receiveCampsite(campsite)))
}