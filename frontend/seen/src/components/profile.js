import React, { Component } from "react";

class Profile extends React.Component {
  render() {
    return (
      <div className="profile-container">
        <h1 className="profile-greeter">hello, [ILLETONEVE]</h1>
        <img
          src={"https://i.imgur.com/CwjttdP.jpg"}
          className="profile-page-photo"
          alt="neve az illetonek"
        />
        <h3 className="profile-details-title">profile details</h3>
        <div className="profile-details-container">
          <div className="user-details">
            <h4>ezekadetailsek</h4>
            <p>name</p>
            <p>egyeb dolgok</p>
          </div>
          <div className="user-preferences">
            <h4>ezekapreferenciak</h4>
            <p>I am looking for [zsender/ek]</p>
            <p>(idevalamiopciomodositot)</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
