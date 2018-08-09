import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class NavbarFeatures extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            dropdownOpen: false
        };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
    }
    
    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        const kep = <img src="https://preview.ibb.co/miXnmK/benji.png" className="profilePicture" alt="avatar image"/>;
        return (
                <Navbar light color="white" expand="sm" fixed="top">
                    <NavbarBrand href="/">
                        <strong>Seen</strong>
                    </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav className="bar" left>
                          <NavItem active>
                              <NavLink to="seendex.html">Home</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="/seen">Seen</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="/have">Have seen</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="/about">About</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="/faq">FAQ</NavLink>
                          </NavItem>
                        </NavbarNav>
                        <NavbarNav right>
                          <NavItem>
                            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                <DropdownToggle nav caret>{kep}</DropdownToggle>
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