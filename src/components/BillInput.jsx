import React from 'react';
import './BillInput.css';

const BillInput = () => {
  return (
    <div className="bill-input">
      <label htmlFor="bill">Bill</label>
      <input type="number" id="bill" placeholder="0" />
    </div>
  );
};

export default BillInput;
