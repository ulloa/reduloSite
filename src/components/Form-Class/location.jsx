import React, { Component } from 'react';

const Location = (props) => {

  if (props.currentStep !== 9) {
    return null
  }

  return(
    <div className="form-group">
      <label htmlFor="location">location</label>
      <input
        className="form-control"
        id="location"
        name="location"
        type="text"
        placeholder="Enter location"
        value={props.location}
        onChange={props.handleChange}
      />
    </div>
  );
}

export default Location;
