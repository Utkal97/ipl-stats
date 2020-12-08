import { delivery_list_initial_state } from './initialState';
import * as actionTypes from './actionTypes';

export const deliveryListReducer = (state = delivery_list_initial_state, action) => {
    switch(action.type) {
        case actionTypes.DELIVERY_LIST_IS_LOADING:
            return {
                ...state,
                is_delivery_list_loading: true,
                delivery_list: null,
                delivery_list_load_error: null
            }

        case actionTypes.DELIVERY_LIST_LOAD_ERROR:
            return {
                ...state,
                is_delivery_list_loading: false,
                delivery_list: null,
                delivery_list_load_error: action.payload
            }

        case actionTypes.DELIVERY_LIST_LOAD_SUCCESS:
            return {
                ...state,
                is_delivery_list_loading: false,
                delivery_list: action.payload,
                delivery_list_load_error: null
            }
            
        default:
            return state
    }
}