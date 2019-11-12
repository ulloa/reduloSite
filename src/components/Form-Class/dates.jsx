import React, { Component } from 'react';

const Dates = (props) => {

  if (props.currentStep !== 5) {
    return null
  }

  return(
    <div className="form-group">
      <label htmlFor="dates">Dates</label>
      <input
        className="form-control"
        id="dates"
        name="dates"
        type="text"
        placeholder="Enter date of your class"
        value={props.dates}
        onChange={props.handleChange}
      />
    </div>
  );
}

export default Dates;
