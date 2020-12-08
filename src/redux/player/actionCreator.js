import * as actionTypes from './actionTypes';

export const getPlayerDetails = name => dispatch => {
    try {
        const data = "player data";
        dispatch(setPlayerDetails(data));
    }
    catch(error) {
        console.log(error);
        dispatch(playerLoadError("Error encountered while obtaining Player data"));
    }
}

export const setPlayerDetails = (data) => {
    return {
        type: actionTypes.PLAYER_LOAD_SUCCESS,
        payload: data
    }
}

export const playerIsLoading = () => {
    return {
        type: actionTypes.IS_PLAYER_LOADING
    }
}

export const playerLoadError = error => {
    return {
        type: actionTypes.PLAYER_LOAD_ERROR,
        payload: error
    }
}