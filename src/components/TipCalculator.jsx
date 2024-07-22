import React from 'react';
import BillInput from './BillInput';
import PeopleInput from './PeopleInput';
import TipButton from './TipButton';
import TipDisplay from './TipDisplay';
import './TipCalculator.css';

const TipCalculator = () => {
  return (
    <div className="tip-calculator">
      <div className="input-section">
        <BillInput />
        <div className="tip-buttons">
          {[5, 10, 15, 25, 50].map(percentage => (
            <TipButton key={percentage} percentage={percentage} />
          ))}
          <button className="tip-button custom">Custom</button>
        </div>
        <PeopleInput />
      </div>
      <TipDisplay />
    </div>
  );
};

export default TipCalculator;
