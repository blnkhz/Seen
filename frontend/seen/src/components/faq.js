import React, { Component } from "react";

const faqContent = (
  <div className="faqpage">
    <h1 className="faqtitle">frequently asked questions</h1>
    <div className="faqcontainer">
      <h4 className="faquestion">
        Why would I use Seen instead of other dating apps?
      </h4>
      <p className="faqanswer">
        You are absolutely free to use whatever you wish! Though we at Seen
        believe that seeing someone in person can give you a geniune first
        impression and thus a higher probability that you and that mysterious
        individual would make a perfect match. Also, we do believe in second
        chances so if you missed the opportunity to get in touch with them, you
        can always try it here!
      </p>
      <h4 className="faquestion">
        What if I can't remember the person's exact height/body type/etc?
      </h4>
      <p className="faqanswer">
        Worry not, we have a magical algorithm running in the background which
        still lets you match with the mysterious stranger you fancy if your
        guesses are close enough.
      </p>
      <h4 className="faquestion">Who are the people behind Seen?</h4>
      <p className="faqanswer">
        Máté, Blanka & Peti. You are always welcome to visit our{" "}
        <a href="/about">about page</a>
      </p>
      <h4 className="faquestion">How do I use the website?</h4>
      <p className="faqanswer">
        Let's suppose you've just seen someone extraordinary while walking
        downtown, they also noticed you but unfortunately both of you were too
        shy to ask each other's names and contact information. Now all you have
        to do is drop a pin where the encounter took place and try to recall who
        you're looking for, be as descriptive as possible in the 'anything
        else?' textbox. With a bit of luck, the mysterious stranger also knows
        about Seen's existence and will confirm that they saw you indeed. Make
        sure to check your matches by clicking on the 'Sightings' tab!
      </p>
    </div>
    <div className="endoffaq">
      <a className="stillhavequestions" href="/contact">
        still have questions?
      </a>
    </div>
  </div>
);

class Faq extends Component {
  render() {
    return faqContent;
  }
}

export default Faq;
