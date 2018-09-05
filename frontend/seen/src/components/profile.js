import React, { Component } from "react";

class Profile extends React.Component {
  constructor() {
    super();
    this.bindEverything();
    this.state = {
      userGender: "",
      socialHandle: "",
      userHairColor: "",
      userHairStyle: "",
      userGlasses: "",
      userHeight: "",
      userBuild: "",
      userAge: "",
      orientation: "",
      isHidden: true,
      fbuser: ""
    };
  }

  componentDidMount(){
    fetch("http://localhost:52210/getuser/karamell", {
      mode: "cors"})
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({
          fbuser: json,
        });
      })
    };

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  bindEverything() {
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event.target.name, event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = {
      userGender: this.state.userGender,
      socialHandle: this.state.socialHandle,
      userHairColor: this.state.userHairColor,
      userHairStyle: this.state.userHairStyle,
      userGlasses: this.state.userGlasses,
      userHeight: this.state.userHeight,
      userBuild: this.state.userBuild,
      userAge: this.state.userAge,
      orientation: this.state.orientation
    };
    console.log(data);

    fetch("http://localhost:52210/updateuser/727112864294707", {
      method: "POST",
      body: JSON.stringify(data),
      mode: "cors",
      headers: new Headers({
        "Content-Type": "application/json"
      })
    }).catch(error => `Error: ${error}`);
  }

  render() {
    const { user } = this.props;
    const menjekMarAludni = (
      <form method="post" onSubmit={this.handleSubmit} className="formchild">
        <input
          type="text"
          name="socialHandle"
          placeholder=" your social handle"
          onChange={this.handleChange}
          className="handleinput"
          required
        />
        <select
          className="dropdown-newsighting"
          name="userGender"
          onChange={this.handleChange}
          required
        >
          <option value="" disabled selected>
            gender
          </option>
          <option value="female">female</option>
          <option value="male">male</option>
        </select>

        <select
          className="dropdown-newsighting"
          name="orientation"
          onChange={this.handleChange}
          required
        >
          <option value="" disabled selected>
            orientation?
          </option>
          <option value="straight">straight</option>
          <option value="gay">gay</option>
          <option value="bisexual">bisexual</option>
        </select>

        <select
          className="dropdown-newsighting"
          name="userAge"
          onChange={this.handleChange}
          required
        >
          <option value="" disabled selected>
            age
          </option>
          <option value="teen">teen</option>
          <option value="young adult">young adult</option>
          <option value="adult">adult</option>
          <option value="middle-aged">middle-aged</option>
          <option value="elderly">elderly</option>
        </select>

        <select
          className="dropdown-newsighting"
          name="userHeight"
          onChange={this.handleChange}
          required
        >
          <option value="" disabled selected>
            height
          </option>
          <option value="short">short</option>
          <option value="average">average</option>
          <option value="tall">tall</option>
        </select>

        <select
          className="dropdown-newsighting"
          name="userBuild"
          onChange={this.handleChange}
          required
        >
          <option value="" disabled selected>
            build
          </option>
          <option value="thin">thin</option>
          <option value="average">average</option>
          <option value="athletic">athletic</option>
          <option value="ripped">ripped</option>
          <option value="chubby">chubby</option>
        </select>

        <select
          className="dropdown-newsighting"
          name="userHairColor"
          onChange={this.handleChange}
          required
        >
          <option value="" disabled selected>
            hair color
          </option>
          <option value="black">black</option>
          <option value="brown">brown</option>
          <option value="blond(e)">blonde</option>
          <option value="red">red</option>
          <option value="special">special</option>
          <option value="salt n pepper">salt n pepper</option>
        </select>
        <select
          className="dropdown-newsighting"
          name="userHairStyle"
          onChange={this.handleChange}
          required
        >
          <option value="" disabled selected>
            hairstyle
          </option>
          <option value="short">short</option>
          <option value="medium">medium</option>
          <option value="long">long</option>
          <option value="bald">bald</option>
        </select>
        <select
          className="dropdown-newsighting"
          name="userGlasses"
          onChange={this.handleChange}
          required
        >
          <option value="" disabled selected>
            glasses?
          </option>
          <option value="true">yes</option>
          <option value="false">no</option>
        </select>

        <a href="">
          <button type="submit" className="submit-button">
            save changes
          </button>
        </a>
      </form>
    );
    const profile = (
      <div className="profile-container">
        <h1 className="profile-greeter">hello, {user.name}</h1>
        <img src={user.picture} className="profile-page-photo" alt="avatar" />
        <h3 className="profile-details-title">profile details</h3>
        <div className="profile-details-container">
          <div className="user-details">
            <h4>details</h4>
            <p>id: {this.state.fbuser.fbId}</p>
            <p>email: {this.state.fbuser.email}</p>
            <p>gender: {this.state.fbuser.userGender}</p>
            <p>handle: {this.state.fbuser.socialHandle}</p>
            <p>haircolor: {this.state.fbuser.userHairColor}</p>
            <p>hairstyle: {this.state.fbuser.userHairStyle}</p>
            <p>glasses: {this.state.fbuser.userGlasses}</p>
            <p>height: {this.state.fbuser.userHeight}</p>
            <p>build: {this.state.fbuser.userBuild}</p>
            <p>age: {this.state.fbuser.userAge}</p>
            <p>orientation: {this.state.fbuser.orientation}</p>
          </div>
          <div className="user-preferences">
            <h4>ezekapreferenciak</h4>
            <p>I am looking for [zsender/ek]</p>
            <p>(idevalamiopciomodositot)</p>
            <button onClick={this.toggleHidden.bind(this)}>click</button>
            {!this.state.isHidden && menjekMarAludni}
          </div>
        </div>
      </div>
    );
    return profile;
  }
}

export default Profile;
