import {connect} from 'react-redux';
import {signUp, clearErrors} from '../../actions/session_actions';
import Signup from './signup'

const mdtp = dispatch =>({
    signup: user => dispatch(signUp(user)),
    clearErrors: () => dispatch(clearErrors())
})

const mstp = state =>({
    errors: Object.values(state.errors.session)
})

export default connect(mstp,mdtp)(Signup)