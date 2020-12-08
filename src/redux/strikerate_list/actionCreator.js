import * as actionTypes from './actionTypes';

export const getStrikerateList = () => async (dispatch) => {

    try {
        dispatch(strikerateListIsLoading());
        const response = await fetch('data/most_runs_average_strikerate.json');
        const data = await response.json();

        dispatch(setStrikerateList( data ));
    }
    catch(error) {
        console.error(error);
        dispatch(strikerateListLoadError("Error encountered while obtaining Strikerate Average list"));
    }
}

export const setStrikerateList = (data) => {
    return {
        type: actionTypes.STRIKERATE_LIST_LOAD_SUCCESS,
        payload: data
    }
}

export const strikerateListIsLoading = () => {
    return {
        type: actionTypes.STRIKERATE_LIST_IS_LOADING
    }
}

export const strikerateListLoadError = error => {
    return {
        type: actionTypes.STRIKERATE_LIST_LOAD_ERROR,
        payload: error
    }
}