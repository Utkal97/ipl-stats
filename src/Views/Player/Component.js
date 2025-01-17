import React from 'react';
import {connect} from 'react-redux';
import { Table } from 'reactstrap';

import {
    getPlayerDetails,
    playerIsLoading,
    playerLoadError
} from '../../redux/player/actionCreator';

import LoadScreen from '../../Components/Loading/Component';
import Error from '../../Components/Error/Component';

class Player extends React.Component {

    constructor(props) {
        super(props);
        this.start_time = new Date();
        const name = this.props.match.params.name;
        this.props.getPlayerDetails(name);
    }

    componentDidMount() {
        let end_time = new Date();
        console.log(`Load times for Player Details: ${end_time - this.start_time} Milliseconds.`);
    }


    
    shouldComponentUpdate(nextProps, nextState) {                   //The table should only re render when its props change
        if(this.props.player_details !== nextProps.player_details)
            return true;
        else
            return false;
    }

    render() {

        const data = this.props.player_details;
            
        if(this.props.is_player_loading || !data)
            return (
                <LoadScreen content={"Player details"}/>
            );
        else if(this.props.player_load_error)
            return (
                <Error content={"Player details"} />
            )
        else {
            const { player_details, player_strikerate } = data;
            console.log(player_details, player_strikerate);
            return (
                <React.Fragment>
                    <h2>{player_details.Player_Name}</h2>
                    <Table striped>
                        <tbody>
                            <tr>
                                <th scope="row">Country</th>
                                <td>{player_details.Country ? player_details.Country : " "}</td>
                            </tr>
                            <tr>
                                <th scope="row">Date of birth</th>
                                <td>{ player_details.DOB ? player_details.DOB : " "}</td>
                            </tr>
                            <tr>
                                <th scope="row">Batting Side</th>
                                <td>{ player_details.Batting_Hand ? player_details.Batting_Hand : " "}</td>
                            </tr>
                            <tr>
                                <th scope="row">Bowling Skill</th>
                                <td>{ player_details.Bowling_SKill ? player_details.Bowling_SKill : " "}</td>
                            </tr>
                            <tr>
                                <th scope="row">Total Runs</th>
                                <td>{ player_strikerate.total_runs ? player_strikerate.total_runs : "N/A"}</td>
                            </tr>
                            <tr>
                                <th scope="row">Average Runs</th>
                                <td>{ player_strikerate.average ? player_strikerate.average : "N/A"}</td>
                            </tr>
                            <tr>
                                <th scope="row">Strike Rate</th>
                                <td>{ player_strikerate.strikerate ? player_strikerate.strikerate : "N/A"}</td>
                            </tr>
                        </tbody>
                    </Table>
                </React.Fragment>
            );
        }
    }
};

const MapStateToProps = state => {
    const { player_details, is_player_loading, player_load_error } = state.player;

    return {
        player_details: player_details,
        is_player_loading: is_player_loading,
        player_load_error: player_load_error
    }
}

const MapDispatchToProps = dispatch => ({
    getPlayerDetails: (name) => dispatch(getPlayerDetails(name)),
    playerIsLoading: () => dispatch(playerIsLoading()),
    playerLoadError: (error="Player details error") => dispatch(playerLoadError(error))
});

export default connect(MapStateToProps, MapDispatchToProps)(Player);