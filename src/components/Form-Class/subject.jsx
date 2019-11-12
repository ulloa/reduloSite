import React, { Component } from 'react';

const Subject = (props) => {

  if (props.currentStep !== 4) {
    return null
  }
  
  return(
    <div className="form-group">
      <label htmlFor="subject">Pick a category for your class</label>
      <input
        className="form-control"
        id="category"
        name="category"
        type="text"
        placeholder="Select category"
        value={props.category}
        onChange={props.handleChange}
      />
    </div>
  );
}

export default Subject;
