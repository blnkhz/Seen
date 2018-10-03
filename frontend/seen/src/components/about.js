import React, { Component } from "react";
import lng from './Language/language.jsx'; 

class About extends Component {
  render() {
    const aboutContent = (
      <div className="aboutus">
        <h1 className="abouttitle">{lng.seen}</h1>
        <div id="about-container">
          <div className="aboutperson">
            <img
              src={require("../assets/Mate.jpg")}
              className="aboutphoto"
              alt="Máté Dugas"
            />
            <h4 className="aboutnameofperson">Mate Dugas</h4>
            <p className="aboutintroduction">
              A Mate irja mar meg a biot legyen szives.
            </p>
          </div>
          <div className="aboutperson">
            <img
              src={require("../assets/Blank.jpg")}
              className="aboutphoto"
              alt="Blanka Eszter Hoóz"
            />
            <h4 className="aboutnameofperson">Blanka Eszter Hooz</h4>
            <p className="aboutintroduction">
              Blanka is a 23-year-old fresh business graduate from Pécs,
              Hungary, who’s only been coding since the beginning of this year,
              just like these two gentlemen to her right and left. Being a proud
              introvert and procrastinator, she can recall many occasions where
              this app would had come in handy in these past few years. Apart
              from the core idea of the website, she is mainly responsible for
              the UI and the front-end part of Seen, the visible stuff. When she
              is not typing code, there is a good chance that she is reading,
              drawing, taking pictures of something mildly interesting or is
              cartwheeling around the world.
            </p>
          </div>
          <div className="aboutperson">
            <img
              src={require("../assets/Peti.jpg")}
              className="aboutphoto"
              alt="Péter Németh"
            />
            <h4 className="aboutnameofperson">Peter Nemeth</h4>
            <p className="aboutintroduction">
              Peter Nemeth is a junior software developer, who just finished at
              Green Fox Academy where he learnt embedded C and .Net backend.
              There he was part of the developer team in a exciting self-driving
              car project. Now he is working on the Seen application and also
              fighting against the darkness which is spread by the agents of
              unemployment. He is both driven and self-motivated, and constantly
              experimenting with new technologies and techniques. Before he
              started to reedem the world with coding he worked as a manager in
              a coffee shop for 2 years. In his free time, he plays the piano
              and tries not to be the worst player in Overwatch. He also has a
              cat.
            </p>
          </div>
        </div>
      </div>
    );
    return aboutContent;
  }
}

export default About;
