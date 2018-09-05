import React from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

class PostForm extends React.Component {
  constructor() {
    super();
    this.bindEverything();
    this.state = {
      gender: "",
      socialHandle: "",
      hairColor: "",
      hairStyle: "",
      glasses: "",
      message: "",
      latitude: null,
      longitude: null,
      day: undefined
    };
  }

  bindEverything() {
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDayClick = this.handleDayClick.bind(this);
  }

  handleChange(event) {
    console.log(event.target.name, event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  }

  handleDayClick(day, { selected, disabled }) {
    if (disabled)
    {
      return;
    }
    if (selected) {
      this.setState({ selectedDay: undefined });
      return;
    }
    this.setState({ selectedDay: day });
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = {
      gender: this.state.gender,
      socialHandle: this.state.socialHandle,
      hairColor: this.state.hairColor,
      hairStyle: this.state.hairStyle,
      glasses: this.state.glasses,
      message: this.state.message,
      latitude: this.props.savedPos.lat,
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
    console.log(this.props.FbId);
  }

  render() {
    return (
      <form method="post" onSubmit={this.handleSubmit} className="formchild">
        <div>
          <DayPicker
            onDayClick={this.handleDayClick}
            selectedDays={this.state.selectedDay}
            disabledDays={{ after: new Date() }}
          />
        </div>
        <input
          type="text"
          name="socialHandle"
          placeholder=" your social handle"
          onChange={this.handleChange}
          className="handleinput"
          required
        />
        <div className="dropsdowns">
          <select
            className="dropdown-newsighting"
            name="gender"
            onChange={this.handleChange}
            required
          >
            <option value="" disabled selected>
              gender
            </option>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
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
              glasses?
            </option>
            <option value="true">yes</option>
            <option value="false">no</option>
          </select>
        </div>
        <textarea
          rows="4"
          type="text"
          name="message"
          placeholder=" anything else?"
          onChange={this.handleChange}
          className="messageinput"
        />
        <a href="/itsamatch">
          <button type="submit" className="submit-button">
            FIND THEM
          </button>
        </a>
      </form>
    );
  }
}

export default PostForm;
