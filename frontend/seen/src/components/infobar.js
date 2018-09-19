import React from "react";

class Readgend extends React.Component{
  constructor() {
    super();
  this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    const data = {
      socialHandle: this.props.FbUser.socialHandle,
      picture: this.props.FbUser.picture
    };

  fetch("http://localhost:52210/addhelloitsme/" + this.props.userDatas[this.props.indexke].id, {
    method: "POST",
    body: JSON.stringify(data),
    mode: "cors",
    headers: new Headers({
      "Content-Type": "application/json"
    })
  }).catch(error => `Error: ${error}`);
  
  console.log("haha, hihi")
}

  render(){
    
{console.log(this.props.FbUser.picture)}
    return(
      <div>
      {this.props.userDatas.map(
        (element, UnIndex) =>
          UnIndex === this.props.indexke ? (
            <div className="seenswercontainer">
            <h4 className="infotitle">looks familiar?</h4>
              <img className="infobar-picture" src={element.picture} alt="hmmm"></img>
              <h4 className="seenpropertytitle">WHEN?</h4>
              <p className="seenswer">{element.day}</p>
              <h4 className="seenpropertytitle">MESSAGE</h4>
              <p className="seenswer">{element.message}</p>
                <button type="submit" onClick={this.handleSubmit} className="it-is-me-button">
                  YES!
                </button>
            </div>
          ) : null
          
      )}</div>
    );
  }
}

export default Readgend;
