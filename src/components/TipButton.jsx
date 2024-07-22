import React from 'react';
import './TipButton.css';

const TipButton = ({ percentage }) => {
  return (
    <button className="tip-button">
      {percentage}%
    </button>
  );
};

export default TipButton;
