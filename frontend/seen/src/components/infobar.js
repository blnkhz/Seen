import React from "react";
import ReactTooltip from "react-tooltip";

<<<<<<< HEAD
class Readgend extends React.Component {
=======
const niceThings = ["You're a gift to those around you.", "You look good!", "What a beauty!", "You smell nice.", "You're a smart cookie.", "You are awesome!", "I like your style.", "You have the best laugh.", "You light up the room.", "You deserve a hug right now.", "You're all that and a super-size bag of chips.", "On a scale from 1 to 10, you're an 11.",
"You're like a ray of sunshine on a really dreary day.", "Everything would be better if more people were like you!", "Colors seem brighter when you're around.", "You're wonderful.", 
"You have cute elbows. For reals!", "You're someone's reason to smile.", "There's ordinary, and then there's you."]

class Readgend extends React.Component{
>>>>>>> e7497ac6c09a332788ac85071b7d01371bc0d65d
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

<<<<<<< HEAD
  render() {
    return (
=======
  render(){
{console.log(this.props.FbUser.picture)}
    return(
>>>>>>> e7497ac6c09a332788ac85071b7d01371bc0d65d
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
<<<<<<< HEAD
                <ReactTooltip id="aha">I Like Your Smell!</ReactTooltip>
              </div>
            ) : null
        )}
      </div>
=======
                <ReactTooltip id="aha">{niceThings[Math.floor(Math.random() * niceThings.length)]}</ReactTooltip>
            </div>
          ) : null
          
      )}</div>
>>>>>>> e7497ac6c09a332788ac85071b7d01371bc0d65d
    );
  }
}

export default Readgend;
