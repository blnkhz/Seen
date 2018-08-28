import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "mdbreact";

class NavbarFeatures extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      dropdownOpen: false,
    };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <Navbar light color="white" expand="sm" fixed="top">
        <NavbarBrand href="/">
        <img
            src={require("../assets/seenlogo.png")}
            height="40px"
          />
        </NavbarBrand>
        {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
        <Collapse isOpen={this.state.collapse} navbar>
          <NavbarNav className="bar" left>
            <NavItem>
              <NavLink className="navlink" to="/add">have seen</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navlink" to="/sightings">been seen</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navlink" to="/about">about</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navlink" to="/faq">FAQ</NavLink>
            </NavItem>
          </NavbarNav>
          <NavbarNav right>
               <NavItem>
                  <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle nav caret><img className="profilePicture" src={this.props.user.picture} alt={this.state.name} /></DropdownToggle>
                <DropdownMenu>
                  <DropdownItem href="#">My Profile</DropdownItem>
                  <DropdownItem href="#">Messages</DropdownItem>
                  <DropdownItem href="#">Log out</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavItem>
          </NavbarNav>
        </Collapse>
      </Navbar>
    );
  }
}

export default NavbarFeatures;
