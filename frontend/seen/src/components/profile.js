import React, { Component } from "react";
import ReactTooltip from "react-tooltip";
import { renderToString, renderToStaticMarkup } from 'react-dom/server';

var ReactLanguage = require('react-language');
const Hu = ReactLanguage.create('hu');
const En = ReactLanguage.create(true);
class Profile extends Component {
  constructor() {
    super();
    this.myRef = React.createRef();
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
      nem: renderToStaticMarkup(window.navigator.ReactLanguage)
    };
  }

  componentWillMount = () => {
    if (this.props.id === null) {
      console.log("THE WOLRDO!!!");
    } else {
      fetch("http://localhost:52210/getuser/" + this.props.id, {
        mode: "cors"
      })
        .then(res => res.json())
        .then(fbuser => { this.setState({ fbuser }) });
    }
  };

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
            type="text"
            name="socialHandle"
            placeholder={this.state.nem + this.state.fbuser.socialHandle}
            onChange={this.handleChange}
            className="handleinput"
          />
          <ReactTooltip id="handle">
            <En>your contact information, where you can reach you, if there is a match! Importante!</En><Hu>Az elérhetőséged, ahol elérhetnek, ha valaki Rád talál!</Hu>
          </ReactTooltip>
          <select
            className="dropdown-newsighting"
            name="userGender"
            onChange={this.handleChange}
          >
              <option value="" disabled selected hidden>
              {this.state.fbuser.userGender === "male"  && <a><En>Gender: male</En><Hu>Neme: férfi</Hu></a>}
              {this.state.fbuser.userGender === "female"  && <a><En>Gender: female</En><Hu>Neme: nő</Hu></a>}
              </option>
            <En>
              <option value="female">female</option>
            </En>
            <Hu>
              <option value="female">nő</option>
            </Hu>
            <En>
              <option value="male">male</option>
            </En>
            <Hu>
              <option value="male">férfi</option>
            </Hu>
          </select>

          <select
            className="dropdown-newsighting"
            name="orientation"
            onChange={this.handleChange}
          >
            <option value="" disabled selected hidden>
            {this.state.fbuser.orientation === "straight"  && <a><En>Orientation: straight</En><Hu>Nemi orientáció: hetero</Hu></a>}
            {this.state.fbuser.orientation === "gay" && <a><En>Orientation: gay</En><Hu>Nemi orientáció: homoszexuális</Hu></a>}
            {this.state.fbuser.orientation === "bisexual" && <a><En>Orientation: bisexual</En><Hu>Nemi orientáció: biszexuális</Hu></a>}
            </option>
            <option value="straight"><En>Straight</En><Hu>Hetero</Hu></option>
            <option value="gay"><En>Gay</En><Hu>homoszexuális</Hu></option>
            <option value="bisexual"><En>bisexual</En><Hu>biszexuális</Hu></option>
          </select>

          <select
            className="dropdown-newsighting"
            name="userAge"
            onChange={this.handleChange}
          >
            <option value="" disabled selected hidden>
            {this.state.fbuser.userAge === "teen" && <a><En>Age: teen</En><Hu>Kor: tini</Hu></a>}
            {this.state.fbuser.userAge === "young adult" && <a><En>Age: young adult</En><Hu>Kor: fiatalember/hölgy</Hu></a>}
            {this.state.fbuser.userAge === "adult" && <a><En>Age: adult</En><Hu>Kor: felnőtt</Hu></a>}
            {this.state.fbuser.userAge === "middle-aged" && <a><En>Age: middle-aged</En><Hu>Kor: középkorú</Hu></a>}
            {this.state.fbuser.userAge === "elderly" && <a><En>Age: elderly</En><Hu>Kor: idős</Hu></a>}
            </option>
            <option value="teen"><En>teen</En><Hu>tini</Hu></option>
            <option value="young adult"><En>yound adult</En><Hu>fiatalember/hölgy</Hu></option>
            <option value="adult"><En>adult</En><Hu>felnőtt</Hu></option>
            <option value="middle-aged"><En>middle-aged</En><Hu>középkorú</Hu></option>
            <option value="elderly"><En>elderly</En><Hu>idős</Hu></option>
          </select>

          <select
            className="dropdown-newsighting"
            name="userHeight"
            onChange={this.handleChange}
          >
            <option value="" disabled selected hidden>
            {this.state.fbuser.userHeight === "short" && <a><En>Height: short</En><Hu>Magasság: alacsony</Hu></a>}
            {this.state.fbuser.userHeight === "average" && <a><En>Height: average</En><Hu>Magasság: átlagos</Hu></a>}
            {this.state.fbuser.userHeight === "tall" && <a><En>Height: tall</En><Hu>Magasság: magas</Hu></a>}
            </option>
            <option value="short"><En>short</En><Hu>alacsony</Hu></option>
            <option value="average"><En>average</En><Hu>átlagos</Hu></option>
            <option value="tall"><En>tall</En><Hu>magas</Hu></option>
          </select>

          <select
            className="dropdown-newsighting"
            name="userBuild"
            onChange={this.handleChange}
          >
            <option value="" disabled selected hidden>
            {this.state.fbuser.userBuild === "thin" && <a><En>Build: thin</En><Hu>Testfelépítés: vékony</Hu></a>}
            {this.state.fbuser.userBuild === "average" && <a><En>Build: average</En><Hu>Testfelépítés: átlagos</Hu></a>}
            {this.state.fbuser.userBuild === "athletic" && <a><En>Build: athletic</En><Hu>Testfelépítés: sportos</Hu></a>}
            {this.state.fbuser.userBuild === "ripped" && <a><En>Build: ripped</En><Hu>Testfelépítés: kigyúrt</Hu></a>}
            {this.state.fbuser.userBuild === "chubby" && <a><En>Build: chubby</En><Hu>Testfelépítés: husika</Hu></a>}
            </option>
            <option value="thin"><En>thin</En><Hu>vékony</Hu></option>
            <option value="average"><En>average</En><Hu>átlagos</Hu></option>
            <option value="athletic"><En>athletic</En><Hu>sportos</Hu></option>
            <option value="ripped"><En>ripped</En><Hu>kigyúrt</Hu></option>
            <option value="chubby"><En>chubby</En><Hu>husika</Hu></option>
          </select>

          <select
            className="dropdown-newsighting"
            name="userHairColor"
            onChange={this.handleChange}
          >
            <option value="" disabled selected hidden>
            {this.state.fbuser.userHairColor === "black" && <a><En>Hair color: black</En><Hu>Hajszín: fekete</Hu></a>}
            {this.state.fbuser.userHairColor === "brown" && <a><En>Hair color: brown</En><Hu>Hajszín: barna</Hu></a>}
            {this.state.fbuser.userHairColor === "blond(e)" && <a><En>Hair color: blond(e)</En><Hu>Hajszín: szőke</Hu></a>}
            {this.state.fbuser.userHairColor === "red" && <a><En>Hair color: red</En><Hu>Hajszín: red</Hu></a>}
            {this.state.fbuser.userHairColor === "special" && <a><En>Hair color: special</En><Hu>Hajszín: speckó</Hu></a>}
            {this.state.fbuser.userHairColor === "salt n pepper" && <a><En>Hair color: salt n pepper</En><Hu>Hajszín: ősz</Hu></a>}
            </option>
            <option value="black"><En>black</En><Hu>fekete</Hu></option>
            <option value="brown"><En>brown</En><Hu>barna</Hu></option>
            <option value="blond(e)"><En>blond(e)</En><Hu>szőke</Hu></option>
            <option value="red"><En>red</En><Hu>vörös</Hu></option>
            <option value="special"><En>special</En><Hu>speckó</Hu></option>
            <option value="salt n pepper"><En>salt n pepper</En><Hu>ősz</Hu></option>
          </select>
          <select
            className="dropdown-newsighting"
            name="userHairStyle"
            onChange={this.handleChange}
          >
            <option value="" disabled selected hidden>
            {this.state.fbuser.userHairStyle === "short" && <a><En>Hairstyle: short</En><Hu>Hajstílus: rövid</Hu></a>}
            {this.state.fbuser.userHairStyle === "medium" && <a><En>Hairstyle: medium</En><Hu>Hajstílus: középhosszú</Hu></a>}
            {this.state.fbuser.userHairStyle === "long" && <a><En>Hairstyle: long</En><Hu>Hajstílus: hosszú</Hu></a>}
            {this.state.fbuser.userHairStyle === "bald" && <a><En>Hairstyle: bald</En><Hu>Hajstílus: kopaszka</Hu></a>}
            </option>
            <option value="short"><En>short</En><Hu>rövid</Hu></option>
            <option value="medium"><En>medium</En><Hu>középhosszú</Hu></option>
            <option value="long"><En>long</En><Hu>hosszú</Hu></option>
            <option value="bald"><En>bald</En><Hu>kopaszka</Hu></option>
          </select>
          <select
            className="dropdown-newsighting"
            name="userGlasses"
            onChange={this.handleChange}
          >
            <option value="glasses?" disabled selected hidden>
            {this.state.fbuser.userGlasses === "yes" && <a><En>Glasses: yes</En><Hu>Szemüveges: igen</Hu></a>}
            {this.state.fbuser.userGlasses === "no" && <a><En>Glasses: no</En><Hu>Szemüveges: nem</Hu></a>}
            </option>
            <option value="yes"><En>yes</En><Hu>igen</Hu></option>
            <option value="no"><En>no</En><Hu>nem</Hu></option>
          </select>

          <a href="">
            <button type="submit" className="submit-changes-button" onClick={this.componentWillMount()}>
              save changes
          </button>
          </a>
        </form>
      </div>
    );
    const profile = (
      <div id="profile-container">
        <h1 className="profile-greeter"><En>hello</En><Hu>helló</Hu>, {user.name}</h1>
        <img src={user.picture} className="profile-page-photo" alt="avatar" />
        <h3 className="profile-details-title"><En>Profile details</En><Hu>Profil adatok</Hu></h3>
        <div className="profile-details-container">
          <div className="user-details">
            <p>EMAIL: {this.state.fbuser.email}</p>
            <p><En>GENDER:</En><Hu>NEME:</Hu> {this.state.fbuser.userGender === "male" ? <a><En>Male</En><Hu>Férfi</Hu></a> : <a><En>Female</En><Hu>Nő</Hu></a>}</p>
            <p><En>HANDLE:</En><Hu>ELÉRHETŐSÉG:</Hu> {this.state.fbuser.socialHandle}</p>
            <p>
              <En>HAIR: </En><Hu>HAJ: </Hu>
              {this.state.fbuser.userHairColor === "brown" && <a><En>Brown</En><Hu>barna</Hu></a>}
              {this.state.fbuser.userHairColor === "black" && <a><En>black</En><Hu>fekete</Hu></a>}
              {this.state.fbuser.userHairColor === "blond(e)" && <a><En>blonde</En><Hu>szőke</Hu></a>}
              {this.state.fbuser.userHairColor === "red" && <a><En>red</En><Hu>vörös</Hu></a>}
              {this.state.fbuser.userHairColor === "special" && <a><En>special</En><Hu>speckó</Hu></a>}
              {this.state.fbuser.userHairColor === "salt n pepper" && <a><En>salt n pepper</En><Hu>ősz</Hu></a>},
              {" "}
              {this.state.fbuser.userHairStyle === "short" && <a><En>short</En><Hu>rövid</Hu></a>}
              {this.state.fbuser.userHairStyle === "medium" && <a><En>medium</En><Hu>középhosszú</Hu></a>}
              {this.state.fbuser.userHairStyle === "long" && <a><En>long</En><Hu>hosszú</Hu></a>}
              {this.state.fbuser.userHairStyle === "bald" && <a><En>bald</En><Hu>kopaszka</Hu></a>}
            </p>
            <p><En>GLASSES: </En><Hu>SZEMÜVEGES: </Hu> 
             {this.state.fbuser.userGlasses === "yes" && <a><En>yes</En><Hu>igen</Hu></a>}
             {this.state.fbuser.userGlasses === "no" && <a><En>no</En><Hu>nem</Hu></a>}
            </p>
            <p><En>HEIGHT: </En><Hu>MAGASSÁG: </Hu> 
            {this.state.fbuser.userHeight === "tall" && <a><En>tall</En><Hu>magas</Hu></a>}
            {this.state.fbuser.userHeight === "short" && <a><En>short</En><Hu>alacsony</Hu></a>}
            {this.state.fbuser.userHeight === "average" && <a><En>average</En><Hu>átlagos</Hu></a>}
            </p>
            <p><En>BUILD: </En><Hu>TESTALKAT: </Hu> 
            {this.state.fbuser.userBuild === "thin" && <a><En>thin</En><Hu>vékonyka</Hu></a>}
            {this.state.fbuser.userBuild === "average" && <a><En>average</En><Hu>átlagos</Hu></a>}
            {this.state.fbuser.userBuild === "athletic" && <a><En>athletic</En><Hu>sportos</Hu></a>}
            {this.state.fbuser.userBuild === "ripped" && <a><En>ripped</En><Hu>kigyúrt</Hu></a>}
            {this.state.fbuser.userBuild === "chubby" && <a><En>chubby</En><Hu>husika</Hu></a>}
            </p>
            <p><En>AGE: </En><Hu>KOR: </Hu>
            {this.state.fbuser.userAge === "teen" && <a><En>teen</En><Hu>tini</Hu></a>}
            {this.state.fbuser.userAge === "young adult" && <a><En>young adult</En><Hu>fiatalember/hölgy</Hu></a>}
            {this.state.fbuser.userAge === "adult" && <a><En>adult</En><Hu>felnőtt</Hu></a>}
            {this.state.fbuser.userAge === "middle-aged" && <a><En>middle-aged</En><Hu>középkorú</Hu></a>}
            {this.state.fbuser.userAge === "elderly" && <a><En>elderly</En><Hu>idős</Hu></a>}
            </p>
            <p><En>ORIENTATION: </En><Hu>NEMI ORIENTÁCIÓ: </Hu>
            {this.state.fbuser.orientation === "straight" && <a><En>straight</En><Hu>hetero</Hu></a>}
            {this.state.fbuser.orientation === "gay" && <a><En>gay</En><Hu>homoszexuális</Hu></a>}
            {this.state.fbuser.orientation === "bisexual" && <a><En>bisexual</En><Hu>biszexuális</Hu></a>}
            </p>
          </div>
          <button
            href="#33"
            onClick={()=> this.scrollnToggle()}
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
