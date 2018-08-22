import React, { Component } from "react";

class Seendex extends React.Component {
  render() {
    return (
      <div className="seendex">
        <a href="/">
          <img
            src={require("../assets/seenlogo.png")}
            className="seenlogo"
            alt="s e e n"
          />
        </a>
        <div class="wrapper">
          <div className="box a">
            <a href="/add">
              <img
                src={require("../assets/plusz.png")}
                className="haveseen"
                alt="have seen"
              />
            </a>
            <p class="text">HAVE SEEN</p>
          </div>
          <div className="box b">
            <a href="/sightings">
              <img
                src={require("../assets/nagyito2.png")}
                className="beenseen"
                alt="been seen?"
              />
            </a>
            <p class="text">BEEN SEEN?</p>
          </div>
          <div className="box c">
            <a href="/faq">
              <img
                src={require("../assets/pinkquesttion.png")}
                className="faq"
                alt="faq"
              />
            </a>
            <p class="text">FAQ</p>
          </div>
          <div className="box d">
            <a href="about">
              <img
                src={require("../assets/mink.png")}
                className="about"
                alt="about"
              />
            </a>
            <p class="text">ABOUT US</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Seendex;
