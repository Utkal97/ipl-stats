import * as actionTypes from './actionTypes';

export const getDeliveryList = () => async (dispatch) => {

    try {
        dispatch(deliveryListIsLoading());
        const response = await fetch('data/deliveries.json');
        const data = await response.json();

        dispatch(setDeliveryList( data ));
    }
    catch(error) {
        console.error(error);
        dispatch(deliveryListLoadError("Error encountered while obtaining Deliveries list"));
    }
}

export const setDeliveryList = (data) => {
    return {
        type: actionTypes.DELIVERY_LIST_LOAD_SUCCESS,
        payload: data
    }
}

export const deliveryListIsLoading = () => {
    return {
        type: actionTypes.DELIVERY_LIST_IS_LOADING
    }
}

export const deliveryListLoadError = error => {
    return {
        type: actionTypes.DELIVERY_LIST_LOAD_ERROR,
        payload: error
    }
}