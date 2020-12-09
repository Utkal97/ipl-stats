import * as actionTypes from './actionTypes';

export const getPlayerDetails = name => async (dispatch) => {

    try {
        dispatch(playerIsLoading());
        
        let player_list_response = await fetch('/data/players.json');
        let player_list_data = await player_list_response.json();

        let strikerate_response = await fetch('/data/most_runs_average_strikerate.json');
        let strikerate_data = await strikerate_response.json();

        const player_details = player_list_data.find(player => player.Player_Name === name),
                player_strikerate = strikerate_data.find(player => player.batsman === name);

        dispatch(setPlayerDetails({player_details, player_strikerate}));
    }
    catch(error) {
        console.error(error);
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
        type: actionTypes.PLAYER_IS_LOADING
    }
}

export const playerLoadError = error => {
    return {
        type: actionTypes.PLAYER_LOAD_ERROR,
        payload: error
    }
}