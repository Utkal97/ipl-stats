import React from 'react';
import { connect } from 'react-redux';

import {
    getStrikerateList,
    strikerateListIsLoading,
    strikerateListLoadError
} from '../../redux/strikerate_list/actionCreator';

import LoadScreen from '../../Components/Loading/Component';
import Table from '../../Components/Table/Component';
import Error from '../../Components/Error/Component';

class StrikerateList extends React.Component {

    constructor(props) {
        super(props);
        this.props.strikerateListIsLoading()
    }
    async componentDidMount() {
        this.props.getStrikerateList();
    }


    render() {
        const data = this.props.strikerate_list;

        if(this.props.is_strikerate_list_loading || !data)
            return (
                <LoadScreen />
            );
                
        else if(data.length === 0)
            return (
                <p>No Entries</p>
            );

        else if(this.props.strikerate_list_load_error)
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
    const { strikerate_list, is_strikerate_list_loading, strikerate_list_load_error } = state.strikerateList;

    return {
        strikerate_list: strikerate_list,
        is_strikerate_list_loading: is_strikerate_list_loading,
        strikerate_list_load_error: strikerate_list_load_error
    };
}

const MapDispatchToProps = dispatch => ({
    getStrikerateList: () => dispatch(getStrikerateList()),
    strikerateListIsLoading: () => dispatch(strikerateListIsLoading()),
    strikerateListLoadError: (error= "Error occured while loading Highest Strikerate average list") => dispatch(strikerateListLoadError(error))
});

export default connect(MapStateToProps, MapDispatchToProps)(StrikerateList);