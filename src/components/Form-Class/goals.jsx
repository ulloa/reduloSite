import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class Goals extends Component {

  constructor(props) {
    super(props);
    this.state = {goals: this.props.goals};
    this.addGoal = this.addGoal.bind(this);
    this.handleGoalListChange = this.handleGoalListChange.bind(this);
  }

  addGoal(e) {
    let goals = this.state.goals.slice();
    console.log(goals);
    goals.push({name: ''});
    this.setState({goals: goals});
  }

  handleGoalListChange(index, event) {
    let goals = this.state.goals.slice();
    goals[index].name = event.target.value;
    this.setState({goals: goals});
  }

  
  render() {
    if (this.props.currentStep !== 3) {
      return null;
    } else {   
      return(
        <div>
          <label htmlFor="goals">Goals for the class</label>
          {this.state.goals.map((goal, index) => {
            return (
              <div key={index} className="input-group">
                <input type="text"
                       className="form-control"
                       onChange={this.handleGoalListChange.bind(this, index)} value={goal.name}/>
              </div>
            );
          })}
          <Button onClick={this.addGoal}>
            Add goal
          </Button>
        </div>
      );
    }
  }
}

export default Goals;
