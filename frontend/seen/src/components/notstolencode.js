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
              {lng.height}
            </option>
            <option value="short">{lng.short_height}</option>
            <option value="average">{lng.average_height}</option>
            <option value="tall">{lng.tall}</option>
          </select>
          <select
            className="dropdown-newsighting"
            name="build"
            onChange={this.handleChange}
            required
          >
            <option value="" disabled selected>
              {lng.build}
            </option>
            <option value="thin">{lng.thin}</option>
            <option value="average">{lng.average}</option>
            <option value="athletic">{lng.athletic}</option>
            <option value="ripped">{lng.ripped}</option>
            <option value="chubby">{lng.chubby}</option>
          </select>
          <select
            className="dropdown-newsighting"
            name="hairColor"
            onChange={this.handleChange}
            required
          >
            <option value="" disabled selected>
              {lng.hair_color}
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
            name="hairStyle"
            onChange={this.handleChange}
            required
          >
            <option value="" disabled selected>
              {lng.hairstyle}
            </option>
            <option value="short">{lng.short}</option>
            <option value="medium">{lng.medium}</option>
            <option value="long">{lng.long}</option>
            <option value="bald">{lng.bald}</option>
          </select>
          <select
            className="dropdown-newsighting"
            name="glasses"
            onChange={this.handleChange}
            required
          >
            <option value="" disabled selected>
              {lng.glasses}
            </option>
            <option value="yes">{lng.yes}</option>
            <option value="no">{lng.no}</option>
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
          {lng.button_find}
        </button>
      </form>
    );
  }
}

export default PostForm;