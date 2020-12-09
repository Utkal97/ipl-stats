import { team_list_initial_state } from './initialState';
import * as actionTypes from './actionTypes';

export const teamListReducer = (state = team_list_initial_state, action) => {
    switch(action.type) {
        case actionTypes.TEAM_LIST_IS_LOADING:
            return {
                ...state,
                is_team_list_loading: true,
                team_list: null,
                team_list_load_error: null
            }

        case actionTypes.TEAM_LIST_LOAD_ERROR:
            return {
                ...state,
                is_team_list_loading: false,
                team_list: null,
                team_list_load_error: action.payload
            }

        case actionTypes.TEAM_LIST_LOAD_SUCCESS:
            return {
                ...state,
                is_team_list_loading: false,
                team_list: action.payload,
                team_list_load_error: null
            }
            
        default:
            return state
    }
}