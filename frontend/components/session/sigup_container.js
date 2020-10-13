import {connect} from 'react-redux';
import {signUp} from '../../actions/session_actions';
import Signup from './signup'

const mdtp = dispatch =>({
    signup: user => dispatch(signUp(user))
})

export default connect(null,mdtp)(Signup)