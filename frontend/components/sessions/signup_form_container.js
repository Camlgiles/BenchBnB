import SessionForm from './session_form';
import {signup} from '../../actions/session_actions';
import {connect} from 'react-redux';


const mapStateToProps = (state) => ({
    errors: Object.keys(state.errors.session).map(key => state.errors.session[key]),
    formType: 'signup'
})


const mapDispatchToProps = (dispatch) => ({
    processForm: userForm => dispatch(signup(userForm))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);