import React from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import DatePicker from "./datepicker.js";

class PostForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      gender: "",
      socialHandle: "",
      hairColor: "",
      hairStyle: "",
      glasses: "",
      message: "",
      latitude: null,
      longitude: null,
      day: ""
    };
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
      longitude: this.props.savedPos.lng
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
    return (
      <form method="post" onSubmit={this.handleSubmit} className="formchild">
        <div className="datepicker">
          <DatePicker />
        </div>
        <form>
          <select className="gender-dropdown" name="gender">
            <option value="au">Female</option>
            <option value="ca">Male</option>
            <option value="usa">Other</option>
          </select>
        </form>
        <input
          type="text"
          name="socialHandle"
          placeholder="ird ide a szósölhendlit"
          onChange={this.handleChange}
          className="handleinput"
        />
        <input
          type="text"
          name="hairColor"
          placeholder="írjá hairsColorst"
          onChange={this.handleChange}
          className="haircolorinput"
        />
        <input
          type="text"
          name="hairStyle"
          placeholder="írj sztájlszokszot"
          onChange={this.handleChange}
          className="hairstyleinput"
        />
        <input
          type="text"
          name="glasses"
          placeholder="grassesü?"
          onChange={this.handleChange}
          className="glassinput"
        />
        <input
          type="text"
          name="message"
          placeholder="SZPESÖL MASSZÁZS"
          onChange={this.handleChange}
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
