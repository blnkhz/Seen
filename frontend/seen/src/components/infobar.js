import React, { Component } from "react";

const Readgend = ( {userDatas, indexke} ) => (
  <div>
    {userDatas.map((element, UnIndex) =>       
      UnIndex === indexke ? <h1 key={indexke}>{element.gender}</h1> : null)}
  </div>
);

export default Readgend;
