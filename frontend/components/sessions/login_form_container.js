import SessionForm from './session_form';
import { logIn } from '../../actions/session_actions';
import { connect } from 'react-redux';


const mapStateToProps = (state) => ({
    errors: Object.keys(state.errors.session).map(key => state.errors.session[key]),
    formType: 'logIn'
})


const mapDispatchToProps = (dispatch) =>  ({
    processForm: userForm => dispatch(logIn(userForm))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);