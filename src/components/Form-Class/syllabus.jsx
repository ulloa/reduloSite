import React, { Component } from 'react';

const Syllabus = (props) => {

  if (props.currentStep !== 8) {
    return null
  }

  return(
    <div className="form-group">
      <label htmlFor="syllabus">Syllabus of your class</label>
      <input
        className="form-control"
        id="syllabus"
        name="syllabus"
        type="text"
        placeholder="Enter syllaubs"
        value={props.syllabus}
        onChange={props.handleChange}
      />
    </div>
  );
}

export default Syllabus;
