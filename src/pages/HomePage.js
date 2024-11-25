// src/HomePage.js
import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const HomePage = () => {
  // rain amount and time duration variables
  const [amountInput, setAmount] = useState("");
  const [durationInput, setDuration] = useState("");

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };

  const handleClick = () => {
    if (isNaN(amountInput) || isNaN(durationInput)) {
      alert("Both inputs must be numbers!");
      return;
    }

    alert("Amount: " + amountInput + ", Duration: " + durationInput);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Rain Visualizer</h1>
      <p>A website for visualizing how much rain will fall per hour or day.</p>
      <div className="row">
        <div className="col">
          <div className="row">
            <input 
              name="amount" 
              type="text" 
              defaultValue="Amount" 
              onFocus={(e) => (e.target.value = "")} 
              onBlur={(e) => (e.target.placeholder = "Amount")} 
              onChange={handleAmountChange}
            />
          </div>
          <div className="row">
            <input 
              name="duration" 
              type="text" 
              defaultValue="Duration" 
              onFocus={(e) => (e.target.value = "")} 
              onBlur={(e) => (e.target.placeholder = "Duration")} 
              onChange={handleDurationChange}
            />
          </div>
          <div className="row">
            <button onClick={handleClick}>Submit</button>
          </div>
        </div>
        <div className="col">
          Rain image
        </div>
      </div>     
    </div>
  );
};

export default HomePage;
