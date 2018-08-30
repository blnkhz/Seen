import React, { Component } from "react";

class Faq extends React.Component {
  render() {
    return (
      <div className="faqpage">
        <h1 className="faqtitle">frequently asked questions</h1>
        <div className="faqcontainer">
          <h4 className="faquestion">
            Why would I use Seen instead of other dating apps?
          </h4>
          <p className="faqanswer">
            You are absolutely free to use whatever you wish! Though we at Seen
            believe that seeing someone in person can give you a geniune first
            impression and thus a higher probability that you and that
            mysterious individual would make a perfect match. Also, we do
            believe in second chances so if you missed the opportunity to get in
            touch with them, you can always try it here!
          </p>
          <h4 className="faquestion">
            What if I can't remember the person's exact height/body type/etc?
          </h4>
          <p className="faqanswer">
            Worry not, we have a magical algorithm running in the background
            which still lets you match with the mysterious stranger you fancy if
            your guesses are close enough.
          </p>
          <h4 className="faquestion">Who are the people behind Seen?</h4>
          <p className="faqanswer">
            Máté, Blanka & Peti. You are always welcome to visit our <a href="/about">about page</a>
          </p>
          <h4 className="faquestion">How do I use the website?</h4>
          <p className="faqanswer">na ez egy szep hosszu bekezdes lesz</p>
          <h4 className="faquestion">mik vogymuk?</h4>
          <p className="faqanswer">seenek.</p>
        </div>
        <div className="endoffaq">
          <h5 className="stillhavequestions">still have questions?</h5>
          <a className="askawaylink" href="/contact">
            ask away here
          </a>
        </div>
      </div>
    );
  }
}

export default Faq;