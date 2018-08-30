import React from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";

class PostForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDayChange = this.handleDayChange.bind(this);
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

  handleDayChange(day) {
    this.setState({ selectedDay: day });
  }

  handleChange(event) {
    console.log(event.target.name, event.target.value);

    this.setState({ [event.target.name]: event.target.value });
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

    fetch("http://localhost:52210/haveseen", {
      method: "POST",
      body: JSON.stringify(data),
      mode: "cors",
      headers: new Headers({
        "Content-Type": "application/json"
      })
    }).catch(error => `Error: ${error}`);
  }

  render() {
    const { day } = this.state;
    return (
      <form method="post" onSubmit={this.handleSubmit} className="formchild">
        <div className="calendar">
          {day && <p>Day: {day.toLocaleDateString()}</p>}
          {!day && <p>Choose a day</p>}
          <DayPickerInput onDayChange={this.handleDayChange} />
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
          <form>
            <select
              className="dropdown-newsighting"
              name="gender"
              onChange={this.handleChange}
              required={true}
            >
              <option value="" disabled selected>
                gender
              </option>
              <option value="female">female</option>
              <option value="male">male</option>
              <option value="other">other</option>
            </select>
          </form>
          <form>
            <select
              className="dropdown-newsighting"
              name="hairColor"
              onChange={this.handleChange}
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
          </form>
          <form>
            <select
              className="dropdown-newsighting"
              name="hairStyle"
              onChange={this.handleChange}
            >
              <option value="" disabled selected>
                hairstyle
              </option>
              <option value="short">short</option>
              <option value="medium">medium</option>
              <option value="long">long</option>
              <option value="bald">bald</option>
            </select>
          </form>
          <form>
            <select
              className="dropdown-newsighting"
              name="glasses"
              onChange={this.handleChange}
            >
              <option value="" disabled selected>
                glasses?
              </option>
              <option value="true">yes</option>
              <option value="false">no</option>
            </select>
          </form>
        </div>
        <input
          type="text"
          name="message"
          placeholder=" anything else?"
          onChange={this.handleChange}
          className="messageinput"
        />
        <a href="/">
          <button type="submit" className="submit-button">
            FIND THEM
          </button>
        </a>
      </form>
    );
  }
}

export default PostForm;
