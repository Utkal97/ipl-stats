import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from "redux-thunk";

import { playerReducer } from './player/reducers';
import { playerListReducer } from './player_list/reducers';
import { deliveryListReducer } from './delivery_list/reducers';
import { matchListReducer } from './match_list/reducers';
import { strikerateListReducer } from './strikerate_list/reducers';
import { teamListReducer } from './team_list/reducers';

const rootReducer = combineReducers({
    player: playerReducer,
    playerList: playerListReducer,
    deliveryList: deliveryListReducer,
    matchList: matchListReducer,
    strikerateList: strikerateListReducer,
    teamList: teamListReducer
});

export const ConfigureStore = () => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;;
    let store;
    if(!composeEnhancers)
        store = createStore( rootReducer, applyMiddleware(thunk) );
    else
        store = createStore( rootReducer, composeEnhancers( applyMiddleware(thunk)))
    return store;
}