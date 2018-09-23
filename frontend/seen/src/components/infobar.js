import React from "react";
import ReactTooltip from "react-tooltip";

class Readgend extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      message: ""
    };
  }
  handleChange(event) {
    console.log(event.target.name, event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const data = {
      socialHandle: this.props.FbUser.socialHandle,
      picture: this.props.FbUser.picture,
      message: this.state.message
    };

    fetch(
      "http://localhost:52210/addhelloitsme/" +
        this.props.userDatas[this.props.indexke].id,
      {
        method: "POST",
        body: JSON.stringify(data),
        mode: "cors",
        headers: new Headers({
          "Content-Type": "application/json"
        })
      }
    ).catch(error => `Error: ${error}`);
  }

  render() {
    return (
      <div>
        {this.props.userDatas.map(
          (element, UnIndex) =>
            UnIndex === this.props.indexke ? (
              <div className="seenswercontainer">
                <h4 className="infotitle">looks familiar?</h4>
                <img
                  data-tip
                  data-for="aha"
                  className="infobar-picture"
                  src={element.picture}
                  alt="hmmm"
                />
                <h4 className="seenpropertytitle">WHEN?</h4>
                <p className="seenswer">{element.day}</p>
                <h4 className="seenpropertytitle">MESSAGE</h4>
                <p className="seenswer">{element.message}</p>
                <textarea
                  rows="3"
                  type="text"
                  name="message"
                  onChange={this.handleChange}
                  placeholder="Send a nice message!"
                  className="messageinput"
                />
                <button
                  type="submit"
                  onClick={this.handleSubmit}
                  className="it-is-me-button"
                >
                  YES!
                </button>
                <ReactTooltip id="aha">I Like Your Smell!</ReactTooltip>
              </div>
            ) : null
        )}
      </div>
    );
  }
}

export default Readgend;
