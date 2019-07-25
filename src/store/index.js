import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { fetchHasError, isloadingData, setFetchedList } from '../store/reducers';


const rootReducer = combineReducers({
    list: setFetchedList,
    hasError: fetchHasError,
    isLoading: isloadingData
});

export default createStore(
    rootReducer,
    applyMiddleware(thunk)
);
