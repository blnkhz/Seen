import React from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import ReactTooltip from "react-tooltip";

var ReactLanguage = require('react-language');
const Hu = ReactLanguage.create('hu');
const En = ReactLanguage.create(true);

class PostForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      gender: "",
      hairColor: "",
      hairStyle: "",
      glasses: "",
      message: "",
      build: "",
      height: "",
      age: "",
      latitude: null,
      longitude: null,
      day: undefined,
      buttonPressed: false,
      buttonValue: 'Sent'
    };
  }

  klikk() {
    this.setState({ buttonPressed: true });
  }

  handleChange(event) {
    console.log(event.target.name, event.target.value);

    this.setState({ [event.target.name]: event.target.value });
  }

  handleDayClick(day, { selected, disabled }) {
    if (disabled) {
      return;
    }
    if (selected) {
      this.setState({ selectedDay: new Date() });
      return;
    }
    this.setState({ selectedDay: day });
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = {
      gender: this.state.gender,
      hairColor: this.state.hairColor,
      hairStyle: this.state.hairStyle,
      glasses: this.state.glasses,
      message: this.state.message,
      latitude: this.props.savedPos.lat,
      build: this.state.build,
      age: this.state.age,
      height: this.state.height,
      picture: this.props.picture,
      longitude: this.props.savedPos.lng,
      day: this.state.selectedDay.toLocaleDateString()
    };
    console.log(data);

    fetch("http://localhost:52210/addsighting/" + this.props.FbId, {
      method: "POST",
      body: JSON.stringify(data),
      mode: "cors",
      headers: new Headers({
        "Content-Type": "application/json"
      })
    }).catch(error => `Error: ${error}`);

    this.klikk();
  }

  render() {
    return (
      <form method="post" onSubmit={this.handleSubmit} className="formchild" onKeyDown="Enter">
        <div  data-tip data-for="date">
          <DayPicker
            onDayClick={this.handleDayClick}
            selectedDays={this.state.selectedDay}
            disabledDays={{ after: new Date() }}
          />
          <ReactTooltip id="date">
              <En>Select a date when you saw her/him</En><Hu>Válassz dátumot, amikor láttad őt!</Hu>
          </ReactTooltip>
        </div>
        <div className="dropsdowns">
          <select
            className="dropdown-newsighting"
            name="gender"
            onChange={this.handleChange}
            required="required"
          >
            <option value="" disabled selected>
              <En>gender</En><Hu>neme</Hu>
            </option>
            <option value="female"><En>female</En><Hu>nő</Hu></option>
            <option value="male"><En>male</En><Hu>férfi</Hu></option>
          </select>
          <select
            className="dropdown-newsighting"
            name="age"
            onChange={this.handleChange}
            required
          >
            <option value="" disabled selected>
            <En>age</En><Hu>kora</Hu>
            </option>
            <option value="teen"><En>teen</En><Hu>tini</Hu></option>
            <option value="young adult"><En>young adult</En><Hu>fiatalember/hölgy</Hu></option>
            <option value="adult"><En>adult</En><Hu>felnőtt</Hu></option>
            <option value="middle-aged"><En>middle-aged</En><Hu>középkorú</Hu></option>
            <option value="elderly"><En>elderly</En><Hu>idős</Hu></option>
          </select>
          <select
            className="dropdown-newsighting"
            name="height"
            onChange={this.handleChange}
            required
          >
            <option value="" disabled selected>
            <En>height</En><Hu>magasság</Hu>
            </option>
            <option value="short"><En>short</En><Hu>alacsony</Hu></option>
            <option value="average"><En>average</En><Hu>átlagos</Hu></option>
            <option value="tall"><En>tall</En><Hu>magas</Hu></option>
          </select>
          <select
            className="dropdown-newsighting"
            name="build"
            onChange={this.handleChange}
            required
          >
            <option value="" disabled selected>
            <En>build</En><Hu>testfelépítése</Hu>
            </option>
            <option value="thin"><En>thin</En><Hu>vékony</Hu></option>
            <option value="average"><En>average</En><Hu>átlagos</Hu></option>
            <option value="athletic"><En>athletic</En><Hu>sportos</Hu></option>
            <option value="ripped"><En>ripped</En><Hu>kivanbaszva</Hu></option>
            <option value="chubby"><En>chubby</En><Hu>husi</Hu></option>
          </select>
          <select
            className="dropdown-newsighting"
            name="hairColor"
            onChange={this.handleChange}
            required
          >
            <option value="" disabled selected>
            <En>hair color</En><Hu>haj szín</Hu>
            </option>
            <option value="black"><En>black</En><Hu>fekete</Hu></option>
            <option value="brown"><En>brown</En><Hu>barna</Hu></option>
            <option value="blond(e)"><En>blonde</En><Hu>szőke</Hu></option>
            <option value="red"><En>red</En><Hu>vörös</Hu></option>
            <option value="special"><En>special</En><Hu>speckó</Hu></option>
            <option value="salt n pepper"><En>salt n pepper</En><Hu>ősz</Hu></option>
          </select>
          <select
            className="dropdown-newsighting"
            name="hairStyle"
            onChange={this.handleChange}
            required
          >
            <option value="" disabled selected>
            <En>hairstyle</En><Hu>haj stílus</Hu>
            </option>
            <option value="short"><En>short</En><Hu>rövid</Hu></option>
            <option value="medium"><En>medium</En><Hu>középhosszú</Hu></option>
            <option value="long"><En>long</En><Hu>hosszú</Hu></option>
            <option value="bald"><En>bald</En><Hu>kopaszocska</Hu></option>
          </select>
          <select
            className="dropdown-newsighting"
            name="glasses"
            onChange={this.handleChange}
            required
          >
            <option value="" disabled selected>
            <En>glasses</En><Hu>szemüveg</Hu>
            </option>
            <option value="yes"><En>yes</En><Hu>igen</Hu></option>
            <option value="no"><En>no</En><Hu>nem</Hu></option>
          </select>
          <textarea
            rows="3"
            type="text"
            name="message"
            placeholder={ReactLanguage.getLanguage() === 'en' ? "anything else?" : "egyéb jellemző?"}
            onChange={this.handleChange}
            className="messageinput"
          />
        </div>
        <span className="sentMessage" style={{ display: !this.state.buttonPressed ? 'none' : 'block' }}><En>Sent</En><Hu>Elküldve</Hu>!</span>
        <button type="submit" className="submit-button" style={{ display: this.state.selectedDay !== undefined && !this.state.buttonPressed ? 'inline' : 'none' }}>
        <En>Find Them!</En><Hu>Találd meg!</Hu>
        </button>
      </form>
    );
  }
}

export default PostForm;