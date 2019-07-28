import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { fetchHasError, isloadingData, setFetchedList, setFilterInput, toggleFilterVisibility } from '../store/reducers';


const rootReducer = combineReducers({
    list: setFetchedList,
    hasError: fetchHasError,
    isLoading: isloadingData,
    filter: setFilterInput,
    isFilterShowing: toggleFilterVisibility,
});

export default createStore(
    rootReducer,
    applyMiddleware(thunk)
);
