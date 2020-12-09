import React from 'react';
import { connect } from 'react-redux';

import {
    getMatchList,
    matchListIsLoading,
    matchListLoadError
} from '../../redux/match_list/actionCreator';

import LoadScreen from '../../Components/Loading/Component';
import Table from '../../Components/Table/Component';
import Error from '../../Components/Error/Component';

class MatchList extends React.Component {

    constructor(props) {
        super(props);
        this.start_time = new Date();       //compute load time from start

        this.props.matchListIsLoading();
        this.props.getMatchList();
    }

    componentDidMount() {
        let end_time = new Date();          //compute time after rendering
        console.log(`Load times for Matches: ${end_time - this.start_time} Milliseconds.`);
    }


    shouldComponentUpdate(nextProps, nextState) {                   //The table should only re render when its props change
        if(this.props.match_list !== nextProps.match_list) {
            return true;
        }
        else
            return false;
    }

    render() {
        const data = this.props.match_list;

        if(this.props.is_match_list_loading || !data)
            return (
                <LoadScreen content={"Match records"}/>
            );
                
        else if(data.length === 0)
            return (
                <p>No Entries</p>
            );

        else if(this.props.match_list_load_error)
            return (
                <Error content={"Matches list"} />
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
                <Table heading={"Matches"} data = {data} columns={columns} pivot={["Season"]}/>
            );
        }
    }
};

const MapStateToProps = state => {
    const { match_list, is_match_list_loading, match_list_load_error } = state.matchList;

    return {
        match_list: match_list,
        is_match_list_loading: is_match_list_loading,
        match_list_load_error: match_list_load_error
    };
}

const MapDispatchToProps = dispatch => ({
    getMatchList: () => dispatch(getMatchList()),
    matchListIsLoading: () => dispatch(matchListIsLoading()),
    matchListLoadError: (error= "Error occured while loading Matches list") => dispatch(matchListLoadError(error))
});

export default connect(MapStateToProps, MapDispatchToProps)(MatchList);