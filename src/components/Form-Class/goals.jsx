import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

const Goals = (props) => {
  
  if (props.currentStep !== 3) {
    return null;
  }

  return(
    <div>
      <label>Goals for the class</label>
      {props.goals.map((goal, index) => {
        return (
          <div key={index} className="input-group">
            <input
              className="form-control"
              type="text"
              placeholder="Enter goal"
              value={goal.name}
              onChange={e=> props.handleGoalListChange(e, index)}
            />
          </div>
        );
      })}
      <Button onClick={props.addGoal}>
        Add goal
      </Button>
    </div>
  );
}

export default Goals;
