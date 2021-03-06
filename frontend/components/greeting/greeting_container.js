import { connect } from 'react-redux'

import Greeting from './greeting'
import { logout } from '../../actions/session_actions'



const mapStateToProps = (state) => {
    // debugger
    return ( {
    currentUser: state.entities.users[state.session.id]
    })}

const mapDispatchToProps = (dispatch) => ({
    logOut: () => dispatch(logout())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Greeting)