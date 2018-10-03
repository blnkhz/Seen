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
import lng from "./Language/language.jsx";

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
  _onSetLanguageToEnglish() {
    localStorage.setItem("lang", "en");
    lng.setLanguage(localStorage.getItem("lang"));
    this.forceUpdate();
  }
  _onSetLanguageToHungarian() {
    localStorage.setItem("lang", "hu");
    lng.setLanguage(localStorage.getItem("lang"));
    this.forceUpdate();
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

  logout_fb(){
    window.FB.logout();
    document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
  }

  render() {
    const kep = (
      <img
        src={
          this.props.user.picture === ""
            ? require("../assets/loading2.gif")
            : this.props.user.picture
        }
        className="profilePicture"
        alt="avatar"
      />
    );
    return (
      <Navbar light color="white" expand="sm" fixed="top">
        <NavbarBrand>
          <NavLink to="/">
            <img
              src={require("../assets/seenlogo.png")}
              height="40px"
              alt="seenlogo"
            />
          </NavLink>
        </NavbarBrand>
        {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
        <Collapse isOpen={this.state.collapse} navbar>
          <NavbarNav className="bar" left>
            <NavItem>
              <NavLink className="navlink" to="/add">
                {lng.navbar.have_seen}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navlink" to="/sightings">
                {lng.navbar.been_seen}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navlink" to="/about">
                {lng.navbar.about}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navlink" to="/faq">
                {lng.navbar.faq}
              </NavLink>
            </NavItem>
          </NavbarNav>
          <NavbarNav right>
            <NavItem>
              <a href="" onClick={this._onSetLanguageToEnglish}>
                <img
                  className="flag"
                  src={require("../assets/flag_gb.png")}
                  alt="gb_flag"
                />
              </a>
              <a href="" onClick={this._onSetLanguageToHungarian}>
                <img
                  className="flag"
                  src={require("../assets/flag_hu.png")}
                  alt="hu_flag"
                />
              </a>
            </NavItem>
            <NavItem>
              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle nav caret>
                  {kep}
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <NavLink className="navlink" to="/profile">
                      {lng.navbar.profile}
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink className="navlink" to="/itsamatch">
                      {lng.navbar.sightings}
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <a
                      className="navlink"
                      href="/login"
                      onClick={() => {this.logout_fb()}}>
                      {lng.navbar.logout}
                    </a>
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
