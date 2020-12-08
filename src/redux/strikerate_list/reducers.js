import { strikerate_list_initial_state } from './initialState';
import * as actionTypes from './actionTypes';

export const strikerateListReducer = (state = strikerate_list_initial_state, action) => {
    switch(action.type) {
        case actionTypes.STRIKERATE_LIST_IS_LOADING:
            return {
                ...state,
                is_strikerate_list_loading: true,
                strikerate_list: null,
                strikerate_list_load_error: null
            }

        case actionTypes.STRIKERATE_LIST_LOAD_ERROR:
            return {
                ...state,
                is_strikerate_list_loading: false,
                strikerate_list: null,
                strikerate_list_load_error: action.payload
            }

        case actionTypes.STRIKERATE_LIST_LOAD_SUCCESS:
            return {
                ...state,
                is_strikerate_list_loading: false,
                strikerate_list: action.payload,
                strikerate_list_load_error: null
            }
            
        default:
            return state
    }
}