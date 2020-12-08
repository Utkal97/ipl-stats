import * as actionTypes from './actionTypes';


export const getMatchList = () => async (dispatch) => {
    try {
        dispatch(matchListIsLoading())
        const response = await fetch('/data/matches.json');
        const data = await response.json();

        dispatch(setMatchList(data));
    }
    catch(error) {
        console.error(error);
        dispatch(matchListLoadError("Error encountered while obtaining Matches list"));
    }
}

export const setMatchList = (data) => {
    return {
        type: actionTypes.MATCH_LIST_LOAD_SUCCESS,
        payload: data
    }
}

export const matchListIsLoading = () => {
    return {
        type: actionTypes.MATCH_LIST_IS_LOADING
    }
}

export const matchListLoadError = error => {
    return {
        type: actionTypes.MATCH_LIST_LOAD_ERROR,
        payload: error
    }
}