import {connect} from 'react-redux';
import benchIndex from './bench_index';
import {fetchBenches} from '../actions/bench_actions';

const mstp = (state) => {
   debugger 
   return {
    benches: state.entities.benches
   }
}

const mdtp = (dispatch) => ({
   fetchBenches: () => dispatch(fetchBenches())
});


export default connect(
   mstp,
   mdtp
)(benchIndex)