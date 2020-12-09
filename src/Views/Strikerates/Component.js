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
        this.start_time = new Date();

        this.props.strikerateListIsLoading();
        this.props.getStrikerateList();
    }
    
    componentDidMount() {
        let end_time = new Date();
        console.log(`Load times for Strikerates: ${end_time - this.start_time} Milliseconds.`);
    }

    shouldComponentUpdate(nextProps, nextState) {                   //The table should only re render when its props change
        if(this.props.strikerate_list !== nextProps.strikerate_list)
            return true;

        else
            return false;
    }

    render() {
        const data = this.props.strikerate_list;

        if(this.props.is_strikerate_list_loading || !data)
            return (
                <LoadScreen content={"Strike Rates"} />
            );
                
        else if(data.length === 0)
            return (
                <p>No Entries</p>
            );

        else if(this.props.strikerate_list_load_error)
            return (
                <Error content={"Strikerate list"} />
            );

        else {
            let columns = Object.keys(data[0]).map(attribute => {
                let header = attribute;
                if(attribute === "numberofballs")
                    header = "No. of balls";

                return (
                    {
                        Header: header,
                        accessor: attribute,
                        width: 100
                    }
                );
            });

            return (
                <Table heading={"Highest Avg. Strike Rates"} data = {data} columns={columns} />
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