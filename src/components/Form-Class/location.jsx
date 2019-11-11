import React, { Component } from 'react';

const Location = (props) => {

  if (props.currentStep !== 9) {
    return null
  }

  return(
    <div className="form-group">
      <label htmlFor="email">Email address</label>
      <input
        className="form-control"
        id="email"
        name="email"
        type="text"
        placeholder="Enter email"
        value={props.email} // Prop: The email input data
        onChange={props.handleChange} // Prop: Puts data into state
      />
    </div>
  );
}

export default Location;
