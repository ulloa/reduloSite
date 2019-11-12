import React, { Component } from 'react';

const Price = (props) => {

  if (props.currentStep !== 6) {
    return null
  }

  return(
    <div className="form-group">
      <label htmlFor="price">Price of your class</label>
      <input
        className="form-control"
        id="price"
        name="price"
        type="text"
        placeholder="Enter price"
        value={props.price} // Prop: The email input data
        onChange={props.handleChange} // Prop: Puts data into state
      />
    </div>
  );
}

export default Price;
