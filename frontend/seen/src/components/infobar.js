import React from "react";

const Readgend = ({ socialHandle, userDatas, indexke }) => (
  <div>
    {userDatas.map(
      (element, UnIndex) =>
        UnIndex === indexke ? (
          console.log(element.id),
          <div className="seenswercontainer">
          <h4 className="infotitle">looks familiar?</h4>
            <img className="infobar-picture" src={element.picture} alt="hmmm"></img>
            <h4 className="seenpropertytitle">WHEN?</h4>
            <p className="seenswer">{element.day}</p>
            <h4 className="seenpropertytitle">MESSAGE</h4>
            <p className="seenswer">{element.message}</p>
            <a href="/itsamatch">
              <button type="submit" className="it-is-me-button">
                YES!
              </button>
            </a>
          </div>
        ) : null
    )}
  </div>
);

export default Readgend;
