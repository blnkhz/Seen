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
              src={require("../assets/mockupportrait.png")}
              className="aboutphoto"
              alt="neve az illetonek"
            />
            <h4 className="aboutnameofperson">Mate Dugas</h4>
            <p className="aboutintroduction">
              It's like in this universe we process time linearly forward. But
              outside of our space time from what would be a fourth dimensional
              perspective time wouldn't exist. And from that vantage could we
              attain it? We see our space time would look flattened. Like a
              single sculpture of matter and super-position of every place it
              ever occupied. Our sentience is just cycling through our lives
              like carts on a track. See everything outside our dimension that's
              eternity. Eternity looking down on us. Now to us its a sphere but
              to them its a circle.
            </p>
          </div>
          <div className="aboutperson">
            <img
              src={require("../assets/mockupportrait.png")}
              className="aboutphoto"
              alt="neve az illetonek"
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
              src={require("../assets/mockupportrait.png")}
              className="aboutphoto"
              alt="neve az illetonek"
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
