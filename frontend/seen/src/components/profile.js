import React, { Component } from "react";

class Profile extends Component {
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
      fbuser: null
    };
  }

  componentWillMount = () =>{
    if(this.props.id === null){
      console.log("THE WOLRDO!!!");
    }else{
      fetch("http://localhost:52210/getuser/" + this.props.id, {
        mode: "cors"})
        .then(res => res.json())
        .then(fbuser => {this.setState({ fbuser })});
        alert('DURR');
  }};

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

    fetch("http://localhost:52210/updateuser/" + this.props.user.fbId, {
      method: "POST",
      body: JSON.stringify(data),
      mode: "cors",
      headers: new Headers({
        "Content-Type": "application/json"
      })
    }).catch(error => `Error: ${error}`);
  }

  render() {
    if (this.props.id === null || this.state.fbuser === null) {
      return <div>SANYIKAM!</div>;}
      
    const { user } = this.props;
    const menjekMarAludni = (
      <form method="post" onSubmit={this.handleSubmit} className="profile-form">
        <input
          type="text"
          name="socialHandle"
          placeholder={this.state.fbuser.socialHandle}
          onChange={this.handleChange}
          className="handleinput"
        />
        <select
          className="dropdown-newsighting"
          name="userGender"
          onChange={this.handleChange}
        >
          <option value="" disabled selected hidden>
            Gender? {this.state.fbuser.userGender}
          </option>
          <option value="female">female</option>
          <option value="male">male</option>
        </select>

        <select
          className="dropdown-newsighting"
          name="orientation"
          onChange={this.handleChange}
        >
          <option value="" disabled selected hidden>
            Orientation? {this.state.fbuser.orientation}
          </option>
          <option value="straight">straight</option>
          <option value="gay">gay</option>
          <option value="bisexual">bisexual</option>
        </select>

        <select
          className="dropdown-newsighting"
          name="userAge"
          onChange={this.handleChange}
        >
          <option value="" disabled selected hidden>
            Age? {this.state.fbuser.userAge}
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
        >
          <option value="" disabled selected hidden>
            Height? {this.state.fbuser.userHeight}
          </option>
          <option value="short">short</option>
          <option value="average">average</option>
          <option value="tall">tall</option>
        </select>

        <select
          className="dropdown-newsighting"
          name="userBuild"
          onChange={this.handleChange}
        >
          <option value="" disabled selected hidden>
            Build? {this.state.fbuser.userBuild}
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
        >
          <option value="" disabled selected hidden>
            Hair color? {this.state.fbuser.userHairColor}
          </option>
          <option value="black">black</option>
          <option value="brown">brown</option>
          <option value="blond(e)">blond(e)</option>
          <option value="red">red</option>
          <option value="special">special</option>
          <option value="salt n pepper">salt n pepper</option>
        </select>
        <select
          className="dropdown-newsighting"
          name="userHairStyle"
          onChange={this.handleChange}
        >
          <option value="" disabled selected hidden>
            Hairstyle? {this.state.fbuser.userHairStyle}
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
        >
          <option value="glasses?" disabled selected hidden>
            Glasses? {this.state.fbuser.userGlasses}
          </option>
          <option value="yes">yes</option>
          <option value="no">no</option>
        </select>

        <a href="">
          <button type="submit" className="submit-changes-button">
            save changes
          </button>
        </a>
      </form>
    );
    const profile = (
      <div id="profile-container">
        <h1 className="profile-greeter">hello, {user.name}</h1>
        <img src={user.picture} className="profile-page-photo" alt="avatar" />
        <h3 className="profile-details-title">profile details</h3>
        <div className="profile-details-container">
          <div className="user-details">
            <p>email: {this.state.fbuser.email}</p>
            <p>gender: {this.state.fbuser.userGender}</p>
            <p>handle: {this.state.fbuser.socialHandle}</p>
            <p>
              hair: {this.state.fbuser.userHairColor},{" "}
              {this.state.fbuser.userHairStyle}
            </p>
            <p>glasses: {this.state.fbuser.userGlasses}</p>
            <p>height: {this.state.fbuser.userHeight}</p>
            <p>build: {this.state.fbuser.userBuild}</p>
            <p>age: {this.state.fbuser.userAge}</p>
            <p>orientation: {this.state.fbuser.orientation}</p>
          </div>
          <button
            onClick={this.toggleHidden.bind(this)}
            className="edit-profile"
          >
            EDIT
          </button>
          {!this.state.isHidden && menjekMarAludni}
        </div>
      </div>
    );
    return profile;
  }
}

export default Profile;
