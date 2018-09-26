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

var ReactLanguage = require('react-language');

class NavbarFeatures extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      dropdownOpen: false,
      refresh: false
    };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  handleClick (lang) {
    ReactLanguage.setLanguage(lang);
    this.forceUpdate();
    this.setState({refresh: true});
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
    const Hu = ReactLanguage.create('hu');
    const En = ReactLanguage.create(true);
    const kep = (
      <img
        src={this.props.user.picture === "" ? require("../assets/loading2.gif") : this.props.user.picture}
        className="profilePicture"
        alt="avatar"
      />
    );
    return (
      <Navbar light color="white" expand="sm" fixed="top">
        <NavbarBrand>
          <NavLink to="/">
            <img src={require("../assets/seenlogo.png")} height="40px" alt="seenlogo" />
          </NavLink>
        </NavbarBrand>
        {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
        <Collapse isOpen={this.state.collapse} navbar>
          <NavbarNav className="bar" left>
            <NavItem>
              <NavLink className="navlink" to="/add">
              <En>have seen</En><Hu>láttam őt</Hu>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navlink" to="/sightings">
              <En>been seen</En><Hu>láthattak</Hu>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navlink" to="/about">
                <En>about</En>
                <Hu>rólunk</Hu>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navlink" to="/faq">
              <En>FAQ</En><Hu>GYIK</Hu>
              </NavLink>
            </NavItem>
          </NavbarNav>
          <NavbarNav right>
            <NavItem>
            <a href="" onClick={this.handleClick.bind(this, 'en')}>eng  </a>
            <a href="" onClick={this.handleClick.bind(this, 'hu')}>hu</a>
            </NavItem>
            <NavItem>
              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle nav caret>
                  {kep}
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <NavLink className="navlink" to="/profile">
                      <En>profile</En><Hu>profil</Hu>
                    </NavLink>
                    <NavLink className="navlink" to="/itsamatch">
                      <En>my sightings</En><Hu>észleléseim</Hu>
                    </NavLink>
                    <a className="navlink" href="/login" onClick={()=>{window.FB.logout()}}><En>logout</En><Hu>kijelentkezés</Hu></a>
                  </DropdownItem>
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
