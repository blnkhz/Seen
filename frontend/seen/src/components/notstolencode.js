import React from "react";
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

class PostForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      gender: '',
      socialHandle: '',
      hairColor:'',
      hairStyle:'',
      glasses:'',
      message:'',
      latitude: null,
      longitude: null,
      day: undefined
    };
  }

  handleChange(event) {
    console.log(event.target.name, event.target.value);

    this.setState({ [event.target.name]: event.target.value });
  }

  handleDayClick(day, { selected }) {
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
        <div>
        <DayPicker
          onDayClick={this.handleDayClick}
          selectedDays={this.state.selectedDay}
        />
        {this.state.selectedDay ? ( 
    console.log(this.state.selectedDay),
          <p>You clicked {this.state.selectedDay.toLocaleDateString()}</p>
        ) : (
          <p>Please select a day.</p>
        )}
      </div>
        <input
          type="text"
          name="gender"
          placeholder="ird ide a gendert"
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="socialHandle"
          placeholder="ird ide a szósölhendlit"
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="hairColor"
          placeholder="írjá hairsColorst"
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="hairStyle"
          placeholder="írj sztájlszokszot"
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="glasses"
          placeholder="grassesü?"
          onChange={this.handleChange}
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
