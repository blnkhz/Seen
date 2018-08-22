import React, { Component } from "react";

const Readgend = ( {userDatas, indexke} ) => (
  <div>
    {userDatas.map((element, index) =>       
      index === indexke ? <h1>{element.gender}</h1> : null)}
  </div>
);

export default Readgend;
