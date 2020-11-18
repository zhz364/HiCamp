import React from 'react';
import {connect} from 'react-redux';
import MainBody from './main_body';
import {fetchSpots} from "../../actions/spot_actions"
import {fetchCampsite} from "../../actions/campsite_actions"

const mapStateToProps = (state) => ({
  user: state.session.currentUser
});

const mdtp = dispatch => ({
  fetchSpots: () => dispatch(fetchSpots()),
  fetchCampsite: (id) => dispatch(fetchCampsite(id))
})
export default connect(mapStateToProps,mdtp)(MainBody);