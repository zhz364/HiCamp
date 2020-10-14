import {connect} from 'react-redux';
import {signUp} from '../../actions/session_actions';
import Signup from './signup'

const mdtp = dispatch =>({
    signup: user => dispatch(signUp(user))
})

const mstp = state =>({
    errors: state.errors.session.responseText
})

export default connect(mstp,mdtp)(Signup)