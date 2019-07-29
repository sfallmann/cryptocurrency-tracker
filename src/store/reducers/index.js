import { combineReducers } from 'redux';
import coinlistReducer from './coinlist';

export default combineReducers({
    coinlist: coinlistReducer,
});
