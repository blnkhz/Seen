'use strict'

import React from 'react';

const ReadPos = ({ tomb }) => (
  <div className="display-json-container">
    <h1>Welcome</h1>
    {tomb.map((element, index) => <h3 key={index}>Mr. {element.name}, your age is {element.age}</h3>)}
  </div>
);

export default ReadPos;