import {connect} from 'react-redux';
import {signUp} from '../../actions/session_actions';
import Signup from './signup'

const mdtp = dispatch =>({
    signup: user => dispatch(signUp(user))
})

const mstp = state =>({
    errors: Object.values(state.errors.session)
})

export default connect(mstp,mdtp)(Signup)