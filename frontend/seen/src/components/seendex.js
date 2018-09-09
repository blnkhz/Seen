import React, { Component } from "react";
import {  NavLink } from "mdbreact";

class Seendex extends Component {
  render() {
    return (
      <div className="seendex">
        <NavLink to="/">
          <img
            src={require("../assets/seenlogo.png")}
            className="seenlogo"
            alt="s e e n"
          />
        </NavLink>
        <div class="wrapper">
          <div className="box a">
            <NavLink to="/add">
              <img
                src={require("../assets/plusz.png")}
                className="haveseen"
                alt="have seen"
              />
            </NavLink>
            <p class="text">HAVE SEEN</p>
          </div>
          <div className="box b">
            <NavLink to="/sightings">
              <img
                src={require("../assets/nagyito2.png")}
                className="beenseen"
                alt="been seen?"
              />
            </NavLink>
            <p class="text">BEEN SEEN?</p>
          </div>
          <div className="box c">
            <NavLink to="/faq">
              <img
                src={require("../assets/pinkquesttion.png")}
                className="faq"
                alt="faq"
              />
            </NavLink>
            <p class="text">FAQ</p>
          </div>
          <div className="box d">
            <NavLink to="/about">
              <img
                src={require("../assets/mink.png")}
                className="about"
                alt="about"
              />
            </NavLink>
            <p class="text">ABOUT US</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Seendex;
