
import React from 'react';

const Button = ({ handleClick, label }) => (
  <button onClick={handleClick}>{label}</button>
);

export default Button;