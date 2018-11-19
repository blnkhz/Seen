import React, { Component } from "react";
import ReactTooltip from "react-tooltip";
import lng from './Language/language.jsx';

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
      fbuser: null,
      buttonPressed: false
    };
  }

  componentWillMount = () => {
      fetch("http://localhost:52210/getuser/" + this.props.id, {
        mode: "cors"
      })
        .then(res => res.json())
        .then(fbuser => { this.setState({ fbuser }) });
  };

  checkEmpty = () => {
    if(this.state.socialHandle !== "" && this.state.userGender !== "" && this.state.userAge !== ""
    && this.state.userBuild !== "" && this.state.userGlasses !== "" && this.state.userHairColor !== ""
    && this.state.userHairStyle !== "" && this.state.userHeight !== "" && this.state.orientation !== ""){
      this.props.empty();
    }
  }

  showSaved() {
    this.setState({ buttonPressed: true });
    setTimeout(()=> this.setState( {buttonPressed: false}), 1500);
  }

  scrollnToggle(){
    this.toggleHidden();
    setTimeout(()=>  window.scrollTo(0,1000), 100);
  }

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

    fetch("http://localhost:52210/updateuser/" + this.props.user.fbId, {
      method: "POST",
      body: JSON.stringify(data),
      mode: "cors",
      headers: new Headers({
        "Content-Type": "application/json"
      })
    }).catch(error => `Error: ${error}`);

    this.showSaved();
  }

  render() {
    if (this.props.id === null || this.state.fbuser === null) {
      return <div></div>;
    }
    const { user } = this.props;
    const menjekMarAludni = (
      <div id="33" ref={this.myRef}>
        <form method="post" onSubmit={this.handleSubmit} className="profile-form">
          <input
            data-tip
            data-for="handle"
            pattern="[a-zA-Z0-9]+"
            type="text"
            name="socialHandle"
            placeholder={ lng.contact + ': ' + this.state.fbuser.socialHandle}
            onChange={this.handleChange}
            className="handleinput"
          />
          <ReactTooltip id="handle">
            {lng.contact_tip}
          </ReactTooltip>
          <select
            className="dropdown-newsighting"
            name="userGender"
            onChange={this.handleChange}
          >
              <option value="" disabled selected hidden>
              {this.state.fbuser.userGender === "male"  && lng.gender + ": " + lng.male}
              {this.state.fbuser.userGender === "female"  && lng.gender + ": " + lng.female}
              </option>
              <option value="female">{lng.female}</option>
              <option value="male">{lng.male}</option>
          </select>

          <select
            className="dropdown-newsighting"
            name="orientation"
            onChange={this.handleChange}
          >
            <option value="" disabled selected hidden>
            {this.state.fbuser.orientation === "straight"  && lng.orientation.ori + ": " + lng.orientation.straight}
            {this.state.fbuser.orientation === "gay" && lng.orientation.ori + ": " + lng.orientation.gay}
            {this.state.fbuser.orientation === "bisexual" && lng.orientation.ori + ": " + lng.orientation.bisexual}
            </option>
            <option value="straight">{lng.orientation.straight}</option>
            <option value="gay">{lng.orientation.gay}</option>
            <option value="bisexual">{lng.orientation.bisexual}</option>
          </select>

          <select
            className="dropdown-newsighting"
            name="userAge"
            onChange={this.handleChange}
          >
            <option value="" disabled selected hidden>
            {this.state.fbuser.userAge === "teen" && lng.age + ": " + lng.teen}
            {this.state.fbuser.userAge === "young adult" && lng.age + ": " + lng.young}
            {this.state.fbuser.userAge === "adult" && lng.age + ": " + lng.adult}
            {this.state.fbuser.userAge === "middle-aged" && lng.age + ": " + lng.middle_aged}
            {this.state.fbuser.userAge === "elderly" && lng.age + ": " + lng.elder}
            </option>
            <option value="teen">{lng.teen}</option>
            <option value="young adult">{lng.young}</option>
            <option value="adult">{lng.adult}</option>
            <option value="middle-aged">{lng.middle_aged}</option>
            <option value="elderly">{lng.elder}</option>
          </select>

          <select
            className="dropdown-newsighting"
            name="userHeight"
            onChange={this.handleChange}
          >
            <option value="" disabled selected hidden>
            {this.state.fbuser.userHeight === "short" && lng.height + ": " + lng.short_height}
            {this.state.fbuser.userHeight === "average" && lng.height + ": " + lng.average_height}
            {this.state.fbuser.userHeight === "tall" && lng.height + ": " + lng.tall}
            </option>
            <option value="short">{lng.short_height}</option>
            <option value="average">{lng.average_height}</option>
            <option value="tall">{lng.tall}</option>
          </select>

          <select
            className="dropdown-newsighting"
            name="userBuild"
            onChange={this.handleChange}
          >
            <option value="" disabled selected hidden>
            {this.state.fbuser.userBuild === "thin" && lng.build + ": " + lng.thin}
            {this.state.fbuser.userBuild === "average" && lng.build + ": " + lng.average}
            {this.state.fbuser.userBuild === "athletic" && lng.build + ": " + lng.athletic}
            {this.state.fbuser.userBuild === "ripped" && lng.build + ": " + lng.ripped}
            {this.state.fbuser.userBuild === "chubby" && lng.build + ": " + lng.chubby}
            </option>
            <option value="thin">{lng.thin}</option>
            <option value="average">{lng.average}</option>
            <option value="athletic">{lng.athletic}</option>
            <option value="ripped">{lng.ripped}</option>
            <option value="chubby">{lng.chubby}</option>
          </select>

          <select
            className="dropdown-newsighting"
            name="userHairColor"
            onChange={this.handleChange}
          >
            <option value="" disabled selected hidden>
            {this.state.fbuser.userHairColor === "black" && lng.hair_color + ": " + lng.black}
            {this.state.fbuser.userHairColor === "brown" && lng.hair_color + ": " + lng.brown}
            {this.state.fbuser.userHairColor === "blond(e)" && lng.hair_color + ": " + lng.blonde}
            {this.state.fbuser.userHairColor === "red" && lng.hair_color + ": " + lng.red}
            {this.state.fbuser.userHairColor === "special" && lng.hair_color + ": " + lng.special}
            {this.state.fbuser.userHairColor === "salt n pepper" && lng.hair_color + ": " + lng.salt}
            </option>
            <option value="black">{lng.black}</option>
            <option value="brown">{lng.brown}</option>
            <option value="blond(e)">{lng.blonde}</option>
            <option value="red">{lng.red}</option>
            <option value="special">{lng.special}</option>
            <option value="salt n pepper">{lng.salt}</option>
          </select>
          <select
            className="dropdown-newsighting"
            name="userHairStyle"
            onChange={this.handleChange}
          >
            <option value="" disabled selected hidden>
            {this.state.fbuser.userHairStyle === "short" && lng.hairstyle + ": " + lng.short}
            {this.state.fbuser.userHairStyle === "medium" && lng.hairstyle + ": " + lng.medium}
            {this.state.fbuser.userHairStyle === "long" && lng.hairstyle + ": " + lng.long}
            {this.state.fbuser.userHairStyle === "bald" && lng.hairstyle + ": " + lng.bald}
            </option>
            <option value="short">{lng.short}</option>
            <option value="medium">{lng.medium}</option>
            <option value="long">{lng.long}</option>
            <option value="bald">{lng.bald}</option>
          </select>
          <select
            className="dropdown-newsighting"
            name="userGlasses"
            onChange={this.handleChange}
          >
            <option value="glasses?" disabled selected hidden>
            {this.state.fbuser.userGlasses === "yes" && lng.glasses + ": " + lng.yes}
            {this.state.fbuser.userGlasses === "no" && lng.glasses + ": " + lng.no}
            </option>
            <option value="yes">{lng.yes}</option>
            <option value="no">{lng.no}</option>
          </select>

          <button type="submit" className="submit-changes-button" onClick={() => setTimeout(() => window.location.reload(), 1000)}>
            {lng.button_save}
          </button>
          <span className="sentMessage" style={{ display: !this.state.buttonPressed ? 'none' : 'inline', color: "green"}}>{lng.message_save}</span>
        </form>
      </div>
    );
    const profile = (
      <div id="profile-container">
        <h1 className="profile-greeter">{lng.message_hello}, {user.name}</h1>
        <img src={user.picture} className="profile-page-photo" alt="avatar" />
        <h3 className="profile-details-title">{lng.profile_details}</h3>
        <div className="profile-details-container">
          <div className="user-details">
            <p>EMAIL: {this.state.fbuser.email}</p>
            <p>{lng.gender.toUpperCase()}: {this.state.fbuser.userGender === "male" ? lng.male : lng.female}</p>
            <p>{lng.contact.toUpperCase()}: {this.state.fbuser.socialHandle}</p>
            <p>
              {lng.hair.toUpperCase()}:{" "}
              {this.state.fbuser.userHairColor === "brown" && lng.brown}
              {this.state.fbuser.userHairColor === "black" && lng.black}
              {this.state.fbuser.userHairColor === "blond(e)" && lng.blonde}
              {this.state.fbuser.userHairColor === "red" && lng.red}
              {this.state.fbuser.userHairColor === "special" && lng.special}
              {this.state.fbuser.userHairColor === "salt n pepper" && lng.salt},
              {" "}
              {this.state.fbuser.userHairStyle === "short" && lng.short}
              {this.state.fbuser.userHairStyle === "medium" && lng.medium}
              {this.state.fbuser.userHairStyle === "long" && lng.long}
              {this.state.fbuser.userHairStyle === "bald" && lng.bald}
            </p>
            <p>{lng.glasses.toUpperCase()}:{" "}
             {this.state.fbuser.userGlasses === "yes" && lng.yes}
             {this.state.fbuser.userGlasses === "no" && lng.no}
            </p>
            <p>{lng.height.toUpperCase()}:{" "} 
            {this.state.fbuser.userHeight === "tall" && lng.tall}
            {this.state.fbuser.userHeight === "short" && lng.short_height}
            {this.state.fbuser.userHeight === "average" && lng.average_height}
            </p>
            <p>{lng.build.toUpperCase()}:{" "}
            {this.state.fbuser.userBuild === "thin" && lng.thin}
            {this.state.fbuser.userBuild === "average" && lng.average}
            {this.state.fbuser.userBuild === "athletic" && lng.athletic}
            {this.state.fbuser.userBuild === "ripped" && lng.ripped}
            {this.state.fbuser.userBuild === "chubby" && lng.chubby}
            </p>
            <p>{lng.age.toUpperCase()}:{" "}
            {this.state.fbuser.userAge === "teen" && lng.teen}
            {this.state.fbuser.userAge === "young adult" && lng.young}
            {this.state.fbuser.userAge === "adult" && lng.adult}
            {this.state.fbuser.userAge === "middle-aged" && lng.middle_aged}
            {this.state.fbuser.userAge === "elderly" && lng.elder}
            </p>
            <p>{lng.orientation.ori.toUpperCase()}:{" "}
            {this.state.fbuser.orientation === "straight" && lng.orientation.straight}
            {this.state.fbuser.orientation === "gay" && lng.orientation.gay}
            {this.state.fbuser.orientation === "bisexual" && lng.orientation.bisexual}
            </p>
          </div>
          <button
            onClick={()=> this.scrollnToggle()}
            className="edit-profile"
          >
          {lng.button_edit}
          </button>
          {!this.state.isHidden && menjekMarAludni}
        </div>
      </div>
    );
    return <div>{profile}</div>;
  }
}

export default Profile;
