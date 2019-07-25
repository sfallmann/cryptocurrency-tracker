import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { fetchHasError, isloadingData, setFetchedList } from '../store/reducers';


const rootReducer = combineReducers({
    setFetchedList,
    fetchHasError,
    isloadingData
});

export default createStore(
    rootReducer,
    applyMiddleware(thunk)
);
