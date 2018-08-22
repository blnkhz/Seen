import React, { Component } from "react";

const Readgend = ( {userDatas, indexke} ) => (
  <div>
    {userDatas.map((element, UnIndex) =>       
      UnIndex === indexke ? <div className="blankaprobalkozik">
      <h4 className="seenpropertytitle">Gender</h4>
      <p className="seenswer">{element.gender}</p>
      <h4 className="seenpropertytitle">Hair</h4>
      <p className="seenswer">{element.hairColor}, {element.hairStyle}</p>
      <h4 className="seenpropertytitle">Message</h4>
      <p className="seenswer">{element.message}</p>
      <h4 className="seenpropertytitle">Date</h4>
      <p className="seenswer">{element.day}</p>
      <h4 className="seenpropertytitle">Social Handle</h4>
      <p className="seenswer">{element.socialHandle}</p> </div>: null)}
  </div>
);

export default Readgend;
