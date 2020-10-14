import React from 'react';
import {connect} from 'react-redux';
import MainBody from './main_body';

const mapStateToProps = (state) => ({
  user: state.session.currentUser
});

export default connect(mapStateToProps)(MainBody);