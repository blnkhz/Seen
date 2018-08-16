'use strict'

import React, { Component } from "react";

class Infobar extends React.Component {
  render() {
    return (
      <div className="infobarcontainer">
        <h4 className="seenpropertytitle">Gender</h4>
        <p className="seenswer">Male</p>
        <h4 className="seenpropertytitle">Hair</h4>
        <p className="seenswer">Special, Medium</p>
        <h4 className="seenpropertytitle">Glasses</h4>
        <p className="seenswer">yea boii</p>
        <h4 className="seenpropertytitle">Message</h4>
        <p className="seenswer">Male</p>
      </div>
    );
  }
}

export default Infobar;
