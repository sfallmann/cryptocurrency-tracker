import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { fetchHasError, isloadingData, setFetchedList, setFilterInput } from '../store/reducers';


const rootReducer = combineReducers({
    list: setFetchedList,
    hasError: fetchHasError,
    isLoading: isloadingData,
    filter: setFilterInput
});

export default createStore(
    rootReducer,
    applyMiddleware(thunk)
);
