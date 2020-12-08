import React from "react";
import { Container } from "reactstrap";
import { Switch, Route, Redirect } from "react-router-dom";
import './Style.css'

import Home from '../../Views/Home/Component';
import AboutUs from '../../Views/About us/Component';
import PlayersList from '../../Views/PlayersList/Component';
import DeliveryList from '../../Views/Deliveries/Component';
import MatchList from '../../Views/Matches/Component';
import StrikerateList from '../../Views/Strikerates/Component';
import Player from '../../Views/Player/Component';

const Content = ({ sidebarIsOpen }) => (

    <Container fluid 
        className={"content " + (sidebarIsOpen ? "sidebar-is-open": "")} >
        
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={AboutUs} />
            <Route exact path="/Players" component={PlayersList} />
            <Route exact path="/Deliveries" component={DeliveryList} />
            <Route exact path="/Matches" component={MatchList} />
            <Route exact path="/Strikerates" component={StrikerateList} />
            <Route exact path="/Player/:name" component={Player} />
            <Redirect to="/" />
        </Switch>
    
    </Container>
);

export default Content;
