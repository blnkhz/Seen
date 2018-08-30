import React, { Component } from "react";

const Readgend = ({ userDatas, indexke }) => (
  <div>
    {userDatas.map(
      (element, UnIndex) =>
        UnIndex === indexke ? (
          <div className="seenswercontainer">
            <h4 className="seenpropertytitle">WHEN?</h4>
            <p className="seenswer">{element.day}</p>
            <h4 className="seenpropertytitle">GENDER</h4>
            <p className="seenswer">{element.gender}</p>
            <h4 className="seenpropertytitle">HEIGHT</h4>
            <p className="seenswer">{element.height}</p>
            <h4 className="seenpropertytitle">BUILD</h4>
            <p className="seenswer">{element.build}</p>
            <h4 className="seenpropertytitle">AGE</h4>
            <p className="seenswer">{element.age}</p>
            <h4 className="seenpropertytitle">HAIR</h4>
            <p className="seenswer">
              {element.hairColor}, {element.hairStyle}
            </p>
            <h4 className="seenpropertytitle">MESSAGE</h4>
            <p className="seenswer">{element.message}</p>
            <div className="hover-box">
              <br />
              <p className="hover-text">reveal handle</p>
              <p className="hover-handle">{element.socialHandle}</p>
            </div>
          </div>
        ) : null
    )}
  </div>
);

export default Readgend;
