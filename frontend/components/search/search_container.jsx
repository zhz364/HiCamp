import {connect} from 'react-redux';
import Search from './search';


const mapStateToProps = (state) => ({
    campsites: state.campsites
});

const mapDispatchToProps = (dispatch) => ({
    fetchCampsites: () => dispatch(fetchCampsites())
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);