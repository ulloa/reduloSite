import React, { Component } from 'react';

const Title = (props) => {

  if (props.currentStep !== 2) {
    return null
  }

  return(
    <div className="form-group">
      <label htmlFor="title">Title of your class</label>
      <input
        className="form-control"
        id="title"
        name="title"
        type="text"
        placeholder="Enter Title"
        value={props.title}
        onChange={props.handleChange}
      />
    </div>
  );
}

export default Title;
