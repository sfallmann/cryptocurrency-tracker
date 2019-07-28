import * as types from '../actions/type';

export function fetchHasError(state = false, action) {
    switch (action.type) {
        case types.ITEMS_HAS_ERRORED:
            return action.hasErrored;
        default:
            return state;
    }
}

export function isloadingData(state = false, action) {
    switch (action.type) {
        case types.ITEMS_IS_LOADING:
            return action.isLoading;
        default:
            return state;
    }
}

export function toggleFilterVisibility(state = false, action) {
  switch (action.type) {
      case types.FILTER_IS_SHOWING:
          return !state;
      default:
          return state;
  }
}

export function setFetchedList(state = [], action) {
    switch (action.type) {
        case types.ITEMS_FETCH_DATA_SUCCESS:
            return action.list;
        default:
            return state;
    }
}

export function setFilterInput(state = '', action) {
    switch (action.type) {
        case types.SET_FILTER:
            return action.filter;
        default:
            return state;
    }
}
