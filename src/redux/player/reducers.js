import { player_initial_state } from './initialState';
import * as actionTypes from './actionTypes';

export const playerReducer = (state = player_initial_state, action) => {
    switch(action.type) {
        case actionTypes.PLAYER_IS_LOADING:
            return {
                ...state,
                is_player_loading: true,
                player_details: null,
                player_load_error: null
            }
        case actionTypes.PLAYER_LOAD_ERROR:
            return {
                ...state,
                is_player_loading: false,
                player_details: null,
                player_load_error: action.payload
            }
        case actionTypes.PLAYER_LOAD_SUCCESS:
            return {
                ...state,
                is_player_loading: false,
                player_details: action.payload,
                player_load_error: null
            }
        default:
            return state
    }
}