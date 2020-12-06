import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Container } from 'reactstrap'

import Content from "./Content/Component";
import SideBar from "./Views/sidebar/Component";
import TopBar from './Views/Header/Component';

import "./App.css";

const App = () => {
  const [ sidebarIsOpen, setSidebarOpen] = React.useState(true);
  const toggleSidebar = () => setSidebarOpen( !sidebarIsOpen);

  return (
    <Router>
      <Container fluid>
        <TopBar toggleSidebar={toggleSidebar} />
        <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
        <Content sidebarIsOpen={sidebarIsOpen} />
      </Container>
    </Router>
  );
};

export default App;
