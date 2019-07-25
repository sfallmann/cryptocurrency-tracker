import * as types from './type';
import * as api from '../../api';
/* export function fetchHasError (hasErrored) {
    return {
        type: types.ITEMS_HAS_ERRORED,
        hasErrored
    }
} */

/* export const fetchHasError = (hasErrored) => {
    return {
        type: types.ITEMS_HAS_ERRORED,
        hasErrored
    }
}  */

export const fetchHasError = (hasErrored) => ({
    type: types.ITEMS_HAS_ERRORED,
    hasErrored
});

export const isloadingData = (isLoading) => ({
    type: types.ITEMS_IS_LOADING,
    isLoading
});

export const setFetchedList = (list) => ({
    type: types.ITEMS_FETCH_DATA_SUCCESS,
    list
});

export const setFilter = (filter) => ({
    type: types.SET_FILTER,
    filter: filter
});

/* Thunk Action creator */
export const fetchCoins = () => async (dispatch) => {
        dispatch(fetchHasError(false));
        try {
            dispatch(isloadingData(true));
            const result = await api.fetchCoins();
            dispatch(setFetchedList(result.data.data));
        } catch (err) {
            dispatch(fetchHasError(true));
        } finally {
            dispatch(isloadingData(false));
        }
    };
