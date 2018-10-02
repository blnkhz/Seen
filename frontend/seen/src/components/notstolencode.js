import React from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import ReactTooltip from "react-tooltip";
import lng from './Language/language.jsx'; 


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
        <div data-tip data-for="date">
          <DayPicker
            onDayClick={this.handleDayClick}
            selectedDays={this.state.selectedDay}
            disabledDays={{ after: new Date() }}
          />
          <ReactTooltip id="date">
            {lng.date}
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
              {lng.gender}
            </option>
            <option value="female">{lng.female}</option>
            <option value="male">{lng.male}</option>
          </select>
          <select
            className="dropdown-newsighting"
            name="age"
            onChange={this.handleChange}
            required
          >
            <option value="" disabled selected>
              {lng.age}
            </option>
            <option value="teen">{lng.teen}</option>
            <option value="young adult">{lng.young}</option>
            <option value="adult">{lng.adult}</option>
            <option value="middle-aged">{lng.middle_aged}</option>
            <option value="elderly">{lng.elder}</option>
          </select>
          <select
            className="dropdown-newsighting"
            name="height"
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
            name="build"
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
            name="hairColor"
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
            name="hairStyle"
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
            name="glasses"
            onChange={this.handleChange}
            required
          >
            <option value="" disabled selected>
              glasses
            </option>
            <option value="yes">yes</option>
            <option value="no">no</option>
          </select>
          <textarea
            rows="3"
            type="text"
            name="message"
            placeholder={lng.add_placeholder}
            onChange={this.handleChange}
            className="messageinput"
          />
        </div>
        <span className="sentMessage" style={{ display: !this.state.buttonPressed ? 'none' : 'block' }}>{lng.sent_button}</span>
        <button type="submit" className="submit-button" style={{ display: this.state.selectedDay !== undefined && !this.state.buttonPressed ? 'inline' : 'none' }}>
          Find Them!
        </button>
      </form>
    );
  }
}

export default PostForm;