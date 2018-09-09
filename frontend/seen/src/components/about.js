import React, { Component } from "react";

class About extends Component {
  render() {
    const aboutContent = (
      <div className="aboutus">
        <h1 className="abouttitle">mink vogymuk a seenek.</h1>
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
            attain it? We see our space time would look flattened. Like a single
            sculpture of matter and super-position of every place it ever
            occupied. Our sentience is just cycling through our lives like carts
            on a track. See everything outside our dimension that's eternity.
            Eternity looking down on us. Now to us its a sphere but to them its
            a circle.
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
            I think human consciousness, is a tragic misstep in evolution. We
            became too self-aware, nature created an aspect of nature separate
            from itself, we are creatures that should not exist by natural law.
            We are things that labor under the illusion of having a self; an
            accretion of sensory, experience and feeling, programmed with total
            assurance that we are each somebody, when in fact everybody is
            nobody. Maybe the honorable thing for our species to do is deny our
            programming, stop reproducing, walk hand in hand into extinction,
            one last midnight - brothers and sisters opting out of a raw deal.
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
            In eternity, where there is no time, nothing can grow. Nothing can
            become. Nothing changes. So death created time to grow the things
            that it would kill... and you are reborn but into the same life that
            you've always been born into. I mean, how many times have we had
            this conversation, detectives? Well, who knows? When you can't
            remember your lives, you can't change your lives, and that is the
            terrible and the secret fate of all life. You're trapped... like a
            nightmare you keep waking up into.
          </p>
        </div>
      </div>
    );
    return aboutContent;
  }
}

export default About;
