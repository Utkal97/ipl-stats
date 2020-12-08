import React from "react";
import { NavItem, NavLink, Nav } from "reactstrap";
import { Link } from "react-router-dom";

import './Style.css';

import SubMenu from "./SubMenu";

const SideBar = ({ isOpen, toggle }) => (
  <div className={"sidebar " + (isOpen ? "is-open": " " )}>
      
    <div className="sidebar-header">
      <span color="info" onClick={toggle} style={{ color: "#fff" }}>
        &times;
      </span>
      <h3>Bootstrap Sidebar</h3>
    </div>
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3">
        <p>Dummy Heading</p>
        <SubMenu title="Home" items={submenus[0]} />
        <NavItem>
            <NavLink tag={Link} to={"/Players"}>
                Players
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink tag={Link} to={"/Deliveries"}>
                Deliveries
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink tag={Link} to={"/Matches"}>
                Matches
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink tag={Link} to={"/Teams"}>
                Teams
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink tag={Link} to={"/Strikerates"}>
                Strikerates
            </NavLink>
        </NavItem>

        <SubMenu title="Pages" items={submenus[1]} />
      </Nav>
    </div>
  </div>
);

const submenus = [
  [
    {
      title: "Home 1",
      target: "Home-1",
    },
    {
      title: "Home 2",
      target: "Home-2",
    },
    {
      itle: "Home 3",
      target: "Home-3",
    },
  ],
  [
    {
      title: "Page 1",
      target: "Page-1",
    },
    {
      title: "Page 2",
      target: "Page-2",
    },
  ],
];

export default SideBar;
