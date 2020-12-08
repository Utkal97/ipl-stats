import { match_list_initial_state } from './initialState';
import * as actionTypes from './actionTypes';

export const matchListReducer = (state = match_list_initial_state, action) => {
    switch(action.type) {
        case actionTypes.MATCH_LIST_IS_LOADING:
            return {
                ...state,
                is_match_list_loading: true,
                match_list: null,
                match_list_load_error: null
            }

        case actionTypes.MATCH_LIST_LOAD_ERROR:
            return {
                ...state,
                is_match_list_loading: false,
                match_list: null,
                match_list_load_error: action.payload
            }

        case actionTypes.MATCH_LIST_LOAD_SUCCESS:
            return {
                ...state,
                is_match_list_loading: false,
                match_list: action.payload,
                match_list_load_error: null
            }
            
        default:
            return state
    }
}