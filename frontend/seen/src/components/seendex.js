import React, { Component } from "react";
import { NavLink } from "mdbreact";

const seendex = (
  <div id="seendex">
    <NavLink to="/">
      <img
        src={require("../assets/seenlogo.png")}
        className="seenlogo"
        alt="s e e n"
      />
    </NavLink>
    <div id="seendex-container">
      <div className="seendex-icon">
        <NavLink to="/add">
          <img
            src={require("../assets/plusz.png")}
            className="index-icon add-logo"
            alt="add"
          />
        </NavLink>
        <p className="icon-text">HAVE SEEN</p>
      </div>
      <div className="seendex-icon">
        <NavLink to="/sightings">
          <img
            src={require("../assets/nagyito2.png")}
            className="index-icon sightings-logo"
            alt="sightings"
          />
        </NavLink>
        <p className="icon-text">BEEN SEEN?</p>
      </div>
      <div className="seendex-icon">
        <NavLink to="/faq">
          <img
            src={require("../assets/pinkquestion.png")}
            className="index-icon faq-logo"
            alt="faq"
          />
        </NavLink>
        <p className="icon-text">FAQ</p>
      </div>
      <div className="seendex-icon">
        <NavLink to="/about">
          <img
            src={require("../assets/mink.png")}
            className="index-icon about-logo"
            alt="about"
          />
        </NavLink>
        <p className="icon-text">ABOUT</p>
      </div>
    </div>
  </div>
);

class Seendex extends Component {
  render() {
    return seendex;
  }
}

export default Seendex;