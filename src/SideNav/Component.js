import  React from 'react';
import { Col,  } from 'reactstrap'

import './Style.css'

class SideNav extends React.Component {
    render() {
        return (
            <Col className="sidenav">
                <p>Home</p>
                <p>About Us</p>
            </Col>
        )
    }
};

export default SideNav;