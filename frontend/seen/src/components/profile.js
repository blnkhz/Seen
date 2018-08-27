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
            <p>ezekadetailsek</p>
          </div>
          <div className="user-preferences">
            <p>ezekapreferenciak</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
