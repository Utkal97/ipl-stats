import React from 'react';
import { connect } from 'react-redux';

import {
    getTeamList,
    teamListIsLoading,
    teamListLoadError
} from '../../redux/team_list/actionCreator';
import ReactTable from '../../Components/Table/Component';
import LoadScreen from '../../Components/Loading/Component';
import Error from '../../Components/Error/Component';

class TeamList extends React.Component {

    constructor(props) {
        super(props);
        this.props.teamListIsLoading();
    }

    async componentDidMount() {
        await this.props.getTeamList();
    }

    shouldComponentUpdate(nextProps, nextState) {                   //The table should only re render when its props change
        if(this.props.team_list !== nextProps.team_list)
            return true;
        else
            return false;
    }

    render() {
        const data = this.props.team_list;

        if(this.props.is_team_list_loading || !data)
            return (
                <LoadScreen />
            );

        else if( data.length === 0)
            return (
                <p>No Entries</p>
            );
        
        else if( this.props.team_list_load_error )
            return (
                <Error content={"Teams list"} />
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
                <ReactTable heading={"Teams"} data={data} columns={columns}  />
            );
        }
    }
};

const MapStateToProps = state => {
    const { team_list, is_team_list_loading, team_list_load_error}  = state.teamList;

    return {
        team_list: team_list,
        is_team_list_loading: is_team_list_loading,
        team_list_load_error: team_list_load_error
    };
}

const MapDispatchToProps = dispatch => ({
    getTeamList: () => dispatch(getTeamList()),
    teamListIsLoading: () => dispatch(teamListIsLoading()),
    teamListLoadError: (error= "Error occured") => dispatch(teamListLoadError(error))
});

export default connect(MapStateToProps, MapDispatchToProps)(TeamList);