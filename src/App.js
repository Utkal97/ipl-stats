import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from 'reactstrap';
import { Provider } from 'react-redux';
import "./App.css";

import Content from "./Components/Content/Component";
import SideBar from "./Components/Sidebar/Component";
import TopBar from './Components/Header/Component';

import { ConfigureStore } from './redux/ConfigStore';

const store = ConfigureStore();

const App = () => {
  const [ sidebarIsOpen, setSidebarOpen] = React.useState(true);
  const toggleSidebar = () => setSidebarOpen( !sidebarIsOpen);

  return (
      <Provider store={store}>
        <Router>
            <Container fluid>
                <TopBar toggleSidebar={toggleSidebar} />
                <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
                <Content sidebarIsOpen={sidebarIsOpen} />
            </Container>
        </Router>
    </Provider>
  );
};

export default App;
