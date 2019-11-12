import React, { Component } from 'react';

const Features = (props) => {

  if (props.currentStep !== 1) { // Prop: The current step
    return null
  }
  // The markup for the Step 1 UI
  return(
    <div className="form-group">
      <h2>features of Redulo</h2>
    </div>
  );
}

export default Features;
