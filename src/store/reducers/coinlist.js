import { combineReducers } from 'redux';
import * as types from '../actions/type';

function fetchHasError(state = false, action) {
    switch (action.type) {
        case types.ITEMS_HAS_ERRORED:
            return action.payload;
        default:
            return state;
    }
}

function isLoadingData(state = false, action) {
    switch (action.type) {
        case types.ITEMS_IS_LOADING:
            return action.payload;
        default:
            return state;
    }
}

function toggleFilterVisibility(state = false, action) {
  switch (action.type) {
      case types.FILTER_IS_SHOWING:
          return !state;
      default:
          return state;
  }
}

function setFetchedList(state = [], action) {
    switch (action.type) {
        case types.ITEMS_FETCH_DATA_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}

function setFilterInput(state = '', action) {
    switch (action.type) {
        case types.SET_FILTER:
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
    list: setFetchedList,
    hasError: fetchHasError,
    isLoading: isLoadingData,
    filter: setFilterInput,
    isFilterShowing: toggleFilterVisibility,
});
