import React from "react";
import { NavItem, NavLink, Nav } from "reactstrap";
import { Link } from "react-router-dom";

import './Style.css';


const SideBar = ({ isOpen, toggle }) => (
  <div className={"sidebar " + (isOpen ? "is-open": " " )}>
      
    <div className="sidebar-header">
      <span color="info" onClick={toggle} style={{ color: "#fff" }}>
        &times;
      </span>
      <h3>Stat-IPL</h3>
    </div>
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3">

        <p>What do you want to see?</p>

        <NavItem>
            <NavLink tag={Link} to={"/Matches"}>
                Matches
            </NavLink>
        </NavItem>

        <NavItem>
            <NavLink tag={Link} to={"/Deliveries"}>
                Deliveries
            </NavLink>
        </NavItem>

        <NavItem>
            <NavLink tag={Link} to={"/Players"}>
                Players
            </NavLink>
        </NavItem>

        <NavItem>
            <NavLink tag={Link} to={"/Strikerates"}>
                Strikerates
            </NavLink>
        </NavItem>

        <NavItem>
            <NavLink tag={Link} to={"/Teams"}>
                Teams
            </NavLink>
        </NavItem>

      </Nav>
    </div>
  </div>
);

export default SideBar;
