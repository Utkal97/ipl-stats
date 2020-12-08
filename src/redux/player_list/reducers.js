import { player_list_initial_state } from './initialState';
import * as actionTypes from './actionTypes';

export const playerListReducer = (state = player_list_initial_state, action) => {
    switch(action.type) {
        case actionTypes.PLAYER_LIST_IS_LOADING:
            return {
                ...state,
                is_player_list_loading: true,
                player_list: null,
                player_list_load_error: null
            }

        case actionTypes.PLAYER_LIST_LOAD_ERROR:
            return {
                ...state,
                is_player_list_loading: false,
                player_list: null,
                player_list_load_error: action.payload
            }

        case actionTypes.PLAYER_LIST_LOAD_SUCCESS:
            return {
                ...state,
                is_player_list_loading: false,
                player_list: action.payload,
                player_list_load_error: null
            }
            
        default:
            return state
    }
}