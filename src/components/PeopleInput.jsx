import React from 'react';
import './PeopleInput.css';

const PeopleInput = () => {
  return (
    <div className="people-input">
      <label htmlFor="people">Number of People</label>
      <input type="number" id="people" placeholder="0" />
    </div>
  );
};

export default PeopleInput;
