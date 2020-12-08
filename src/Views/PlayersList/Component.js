import React from 'react';
import { connect } from 'react-redux';

import {
    getPlayerList,
    playerListIsLoading,
    playerListLoadError
} from '../../redux/player_list/actionCreator';
import ReactTable from '../../Components/Table/Component';
import LoadScreen from '../../Components/Loading/Component';
import Error from '../../Components/Error/Component';

class PlayerList extends React.Component {

    constructor(props) {
        super(props);
        this.props.playerListIsLoading();
    }

    componentDidMount() {
        this.props.getPlayerList();
    }

    render() {
        const data = this.props.player_list;
        if(this.props.is_player_list_loading || !data)
            return (
                <LoadScreen />
            );

        else if( data.length === 0)
            return (
                <p>No Entries</p>
            );
        
        else if( this.props.player_list_load_error )
            return (
                <Error content={"Playing list"} />
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
                <ReactTable data={data} columns={columns} />
            );
        }
    }
};

const MapStateToProps = state => {
    const { player_list, is_player_list_loading, player_list_load_error}  = state.playerList;

    return {
        player_list: player_list,
        is_player_list_loading: is_player_list_loading,
        player_list_load_error: player_list_load_error
    };
}

const MapDispatchToProps = dispatch => ({
    getPlayerList: () => dispatch(getPlayerList()),
    playerListIsLoading: () => dispatch(playerListIsLoading()),
    playerListLoadError: (error= "Error occured") => dispatch(playerListLoadError(error))
});

export default connect(MapStateToProps, MapDispatchToProps)(PlayerList);