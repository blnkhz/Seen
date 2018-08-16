import React, { Component } from "react";

const Readgend = ( {tomb, indexke} ) => (
  <div>
    {tomb.map((element, index) =>       
      index === indexke ? <h1>{element.gender}</h1> : null)}
  </div>
);

export default Readgend;
