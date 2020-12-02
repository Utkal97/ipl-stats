import React from 'react';
import { Navbar, NavItem, NavLink, Nav, NavbarBrand } from 'reactstrap';

class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navbar color="light" light expand="md" sticky="top">
                    <NavbarBrand href="/">reactstrap</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">Components</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/Utkal97">Dev</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </React.Fragment>
        )
    }
}

export default Header;