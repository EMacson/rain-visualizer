// src/HomePage.js
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const HomePage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Rain Visualizer</h1>
      <p>A website for visualizing how much rain will fall per hour or day.</p>
      <div className="row">
        <div className="col">
          <div className="row">
            <input name="amount" type="text" defaultValue="Amount" onFocus={(e) => (e.target.value = "")} onBlur={(e) => (e.target.placeholder = "Amount")} />
          </div>
          <div className="row">
            <input name="duration" type="text" defaultValue="Duration" onFocus={(e) => (e.target.value = "")} onBlur={(e) => (e.target.placeholder = "Duration")} />
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

const handleClick = () => {
  alert("Button clicked!");
};

export default HomePage;
