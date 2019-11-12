import React, { Component } from 'react';

const Preview = (props) => {

  if (props.currentStep !== 10) {
    return null
  }
  
  return(
    <div className="form-group">
      <h2>Preview of your class</h2>
    </div>
  );
}

export default Preview;
