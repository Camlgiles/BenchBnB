import {combineReducers} from 'redux';
import {UsersReducer} from './users_reducer';
import {benchesReducer} from './benches_reducer';

const entitiesReducer = combineReducers({
    users: UsersReducer,
    benches: benchesReducer
});

export default entitiesReducer;