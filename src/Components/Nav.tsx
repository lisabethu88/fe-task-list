import React from "react";
import house from "../images/house.gif";
import notes from "../images/notes.gif";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";
import "./Nav.css";

function Navigation() {
  return (
    <header className="App-header">
      <Navbar>
        <Nav className="flex flex-row">
          <NavItem className="mx-5">
            <NavLink className="flex" href="/">
              Home{" "}
              <img src={house} alt="Logo" className="ml-5 w-[50px] h-[50px]" />
            </NavLink>
          </NavItem>
          <NavItem className="mx-5">
            <NavLink className="flex" href="/inspo">
              Inspiration Board{" "}
              <img src={notes} alt="Logo" className="ml-5 w-[50px] h-[50px]" />
            </NavLink>{" "}
          </NavItem>
        </Nav>
      </Navbar>{" "}
    </header>
  );
}

export default Navigation;
