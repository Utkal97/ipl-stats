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

        this.start_time = new Date();                               //compute load time at start
        this.props.deliveryListIsLoading();
        this.props.getDeliveryList();
    }

    componentDidMount() {
        let end_time = new Date();                                  //compute load time at end
        console.log(`Load times for Delivery List: ${end_time - this.start_time} Milliseconds.`);
    }

    shouldComponentUpdate(nextProps, nextState) {                   //The table should only re render when its props change
        if(this.props.delivery_list !== nextProps.delivery_list)
            return true;
        else
            return false;
    }

    render() {
        const data = this.props.delivery_list;

        if(this.props.is_delivery_list_loading || !data)
            return (
                <LoadScreen content={"Delivery record"} />
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
                return ({
                        Header: attribute,
                        accessor: attribute,
                        width: 100
                });
            });

            return (
                <Table heading={"Deliveries"} data={data} columns={columns} />
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
    deliveryListLoadError: (error= "Deliveries list") => dispatch(deliveryListLoadError(error))
});

export default connect(MapStateToProps, MapDispatchToProps)(DeliveryList);