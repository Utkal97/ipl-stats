import * as actionTypes from './actionTypes';

export const getPlayerList = () => async (dispatch) => {

    try {
        dispatch(playerListIsLoading());
        
        const response = await fetch('data/players.json');
        let data = await response.json();

        dispatch(setPlayerList(data));
    }
    catch(error) {
        console.log(error);
        dispatch(playerListLoadError("Error occured while obtaining Players List"));
    }
}

export const setPlayerList = data => {
    return {
        type: actionTypes.PLAYER_LIST_LOAD_SUCCESS,
        payload: data
    }
}

export const playerListIsLoading = () => {
    return {
        type: actionTypes.PLAYER_LIST_IS_LOADING
    }
}

export const playerListLoadError = error => {
    return {
        type: actionTypes.PLAYER_LIST_LOAD_ERROR,
        payload: error
    }
}