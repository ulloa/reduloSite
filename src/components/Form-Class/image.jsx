import React, { Component } from 'react';

const Image = (props) => {

  if (props.currentStep !== 7) {
    return null
  }

  return(
    <div className="form-group">
      <label htmlFor="image">Upload image thumbnail</label>
      <input
        className="form-control"
        id="image"
        name="image"
        type="text"
        placeholder="Upload Image"
        value={props.image}
        onChange={props.handleChange}
      />
    </div>
  );
}

export default Image;
