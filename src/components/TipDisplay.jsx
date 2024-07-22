import React from 'react';
import './TipDisplay.css';

const TipDisplay = () => {
  return (
    <div className="tip-display">
      <div className="tip-amount">
        <p>Tip Amount</p>
        <h2>$0.00</h2>
        <p>/ person</p>
      </div>
      <div className="total">
        <p>Total</p>
        <h2>$0.00</h2>
        <p>/ person</p>
      </div>
      <button className="reset-button">RESET</button>
    </div>
  );
};

export default TipDisplay;
