import React, { Component } from "react";

class Profile extends React.Component {
  render() {
    return (
      <div className="profile-container">
        <h1 className="profile-greeter">hello, {this.props.user.name}</h1>
        <img
          src={this.props.user.picture}
          className="profile-page-photo"
          alt="avatar"
        />
        <h3 className="profile-details-title">profile details</h3>
        <div className="profile-details-container">
          <div className="user-details">
            <h4>details</h4>
            <p>{this.props.user.name}</p>
            <p>{this.props.user.email}</p>
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
