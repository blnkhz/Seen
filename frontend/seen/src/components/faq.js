'use strict'

import React, { Component } from "react";

class Faq extends React.Component {
  render() {
    return (
      <div className="faqpage">
        <h1 className="faqtitle">mink vogymuk a seenek.</h1>
        <div className="faqcontainer">
          <h4 className="faquestion">mivan?</h4>
          <p className="faqanswer">dehogy.</p>
          <h4 className="faquestion">Give us a random movie quote pls</h4>
          <p className="faqanswer">
            I had always heard your entire life flashes in front of your eyes
            the second before you die. First of all, that one second isn't a
            second at all, it stretches on forever, like an ocean of time... For
            me, it was lying on my back at Boy Scout camp, watching falling
            stars... And yellow leaves, from the maple trees, that lined our
            street... Or my grandmother's hands, and the way her skin seemed
            like paper... And the first time I saw my cousin Tony's brand new
            Firebird... And Janie... And Janie... And... Carolyn. I guess I
            could be pretty pissed off about what happened to me... but it's
            hard to stay mad, when there's so much beauty in the world.
            Sometimes I feel like I'm seeing it all at once, and it's too much,
            my heart fills up like a balloon that's about to burst... And then I
            remember to relax, and stop trying to hold on to it, and then it
            flows through me like rain and I can't feel anything but gratitude
            for every single moment of my stupid little life... You have no idea
            what I'm talking about, I'm sure. But don't worry... you will
            someday.
          </p>
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
