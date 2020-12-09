import * as actionTypes from './actionTypes';


export const getTeamList = () => async (dispatch) => {
    try {
        dispatch(teamListIsLoading())
        const response = await fetch('/data/teamwise_home_and_away.json');
        const data = await response.json();

        dispatch(setTeamList(data));
    }
    catch(error) {
        console.error(error);
        dispatch(teamListLoadError("Error encountered while obtaining Teams list"));
    }
}

export const setTeamList = (data) => {
    return {
        type: actionTypes.TEAM_LIST_LOAD_SUCCESS,
        payload: data
    }
}

export const teamListIsLoading = () => {
    return {
        type: actionTypes.TEAM_LIST_IS_LOADING
    }
}

export const teamListLoadError = error => {
    return {
        type: actionTypes.TEAM_LIST_LOAD_ERROR,
        payload: error
    }
}