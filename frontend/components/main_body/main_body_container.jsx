import React from 'react';
import {connect} from 'react-redux';
import MainBody from './main_body';
import {fetchSpots} from "../../actions/spot_actions"
import {fetchCampsite,fetchCampsites} from "../../actions/campsite_actions"

const mapStateToProps = (state) => ({
  user: state.session.currentUser,
  campsites: state.campsites
});

const mdtp = dispatch => ({
  fetchSpots: () => dispatch(fetchSpots()),
  fetchCampsite: (id) => dispatch(fetchCampsite(id)),
  fetchCampsites: () => dispatch(fetchCampsites())
})
export default connect(mapStateToProps,mdtp)(MainBody);