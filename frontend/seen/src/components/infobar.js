import React, { Component } from "react";

const Readgend = ({ userDatas, indexke }) => (
  <div>
    {userDatas.map(
      (element, UnIndex) =>
        UnIndex === indexke ? (
          <div className="seenswercontainer">
            <h4 className="seenpropertytitle">GENDER</h4>
            <p className="seenswer">{element.gender}</p>
            <h4 className="seenpropertytitle">HAIR</h4>
            <p className="seenswer">
              {element.hairColor}, {element.hairStyle}
            </p>
            <h4 className="seenpropertytitle">MESSAGE</h4>
            <p className="seenswer">{element.message}</p>
            <h4 className="seenpropertytitle">WHEN?</h4>
            <p className="seenswer">{element.day}</p>
            <h4 className="seenpropertytitle">HANDLE</h4>
            <p className="seenswer">{element.socialHandle}</p>
            <a href="/itsamatch">
              <button
                type="submit"
                className="it-is-me-button"
              >
                HELLO IT'S ME
              </button>
            </a>
          </div>
        ) : null
    )}
  </div>
);

export default Readgend;
