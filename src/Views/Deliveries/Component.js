import React from 'react';
import { connect } from 'react-redux';

import {
    getDeliveryList,
    deliveryListIsLoading,
    deliveryListLoadError
} from '../../redux/delivery_list/actionCreator';

import LoadScreen from '../../Components/Loading/Component';
import Table from '../../Components/Table/Component';
import Error from '../../Components/Error/Component';

class DeliveryList extends React.Component {

    constructor(props) {
        super(props);
        this.props.deliveryListIsLoading()
    }
    async componentDidMount() {
        this.props.getDeliveryList();
    }

    render() {
        const data = this.props.delivery_list;

        if(this.props.is_delivery_list_loading || !data)
            return (
                <LoadScreen />
            );
                
        else if(data.length === 0)
            return (
                <p>No Entries</p>
            );

        else if(this.props.delivery_list_load_error)
            return (
                <Error content={"Deliveries list"} />
            );

        else {
            let columns = Object.keys(data[0]).map(attribute => {
                return (
                    {
                        Header: attribute,
                        accessor: attribute,
                        width: 100
                    }
                );
            });

            return (
                <Table data = {data} columns={columns} />
            );
        }
    }
};

const MapStateToProps = state => {
    const { delivery_list, is_delivery_list_loading, delivery_list_load_error } = state.deliveryList;

    return {
        delivery_list: delivery_list,
        is_delivery_list_loading: is_delivery_list_loading,
        delivery_list_load_error: delivery_list_load_error
    };
}

const MapDispatchToProps = dispatch => ({
    getDeliveryList: () => dispatch(getDeliveryList()),
    deliveryListIsLoading: () => dispatch(deliveryListIsLoading()),
    deliveryListLoadError: (error= "Error occured while loading Deliveries list") => dispatch(deliveryListLoadError(error))
});

export default connect(MapStateToProps, MapDispatchToProps)(DeliveryList);