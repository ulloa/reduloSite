import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '../../components/Card/index.jsx';

import Features from '../../components/Form-Class/features.jsx';
import Title from '../../components/Form-Class/title.jsx';
import Goals from '../../components/Form-Class/goals.jsx';
import Subject from '../../components/Form-Class/subject.jsx';
import Dates from '../../components/Form-Class/dates.jsx';
import Price from '../../components/Form-Class/price.jsx';
import Image from '../../components/Form-Class/image.jsx';
import Syllabus from '../../components/Form-Class/syllabus.jsx';
import Location from '../../components/Form-Class/location.jsx';
import Preview from '../../components/Form-Class/preview.jsx';

class Create extends Component {
  
  constructor(props) {
    super(props);
    //this.state = props.location.state || props.course;
    // id must exist
    let courseId = props.location.state ? props.location.state.courseId : props.courseId;
    this.state = {
      courseId: courseId,
      currentStep: 1, // Default is Step 1
      title: null,
      image: '',
      subject: '',
      subsubject: '',
      tagline: '',
      workload: 0,
      location: '',
      address: '',
      bio: '',
      contact: '',
//      approved: false,
      chat: '',
      plan: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this._next = this._next.bind(this)
    this._prev = this._prev.bind(this)
  }

  componentDidMount() {
    // if no courseId connected, then return to a mycourses page
    if (!this.state.courseId) {
      this.props.history.push({
        pathname: '/profile',
      })
    } else {
      let token = localStorage.getItem('token');
      fetch(`${process.env.REACT_APP_API}/courses/draft/${this.state.courseId}`,
            {method: "GET",
             mode: "cors",
             headers: {
               "Accept": "application/json",
               "Content-Type": "application/json",
               "Authorization": `Bearer ${token}`,
             },
            })
        .then(res => {
          if (res.status >= 400)
            throw res;
          else
            return res.json();
        })
        .then(result => {
          console.log(result);
        })
        .catch(errorRes => {
          errorRes.json()
                  .then(error => console.log(error))
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  // Use the submitted data to set the state
  handleChange(event) {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })    
  }
  
  // Trigger an alert on form submission
  handleSubmit = (event) => {
    event.preventDefault();
    const { email, username, password } = this.state
    alert(`Your registration detail: \n 
      Email: ${email} \n 
      Username: ${username} \n
      Password: ${password}`)
  }

  _next() {
    let currentStep = this.state.currentStep
    // If the current step is 1 or 2, then add one on "next" button click
    currentStep = currentStep >= 10? 10: currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }
  
  _prev() {
    let currentStep = this.state.currentStep
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentStep = currentStep <= 1? 1: currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }

  // The "next" and "previous" button functions
  get previousButton(){
    let currentStep = this.state.currentStep;
    // If the current step is not 1, then render the "previous" button
    if(currentStep !==1){
      return (
        <button 
          className="btn btn-secondary" 
          type="button" onClick={this._prev}>
          Previous
        </button>
      )
    }
    // ...else return nothing
    return null;
  }

  get nextButton(){
    let currentStep = this.state.currentStep;
    // If the current step is not 3, then render the "next" button
    if(currentStep < 10){
      return (
        <button 
          className="btn btn-primary float-right" 
          type="button" onClick={this._next}>
          Next
        </button>        
      )
    }
    // ...else render nothing
    return null;
  }
  
  render() {
    return(
      <div className="Create">
        <React.Fragment>
          <h1>A Wizard Form!</h1>
          <p>Step {this.state.currentStep} </p> 
          
          <form onSubmit={this.handleSubmit}>
            
            <Features
              currentStep={this.state.currentStep} 
              handleChange={this.handleChange}
              email={this.state.email}
            />
            <Title
              currentStep={this.state.currentStep} 
              handleChange={this.handleChange}
              title={this.state.title}
            />
            <Goals
              currentStep={this.state.currentStep} 
              handleChange={this.handleChange}
              goals={this.state.goals}
            />
            <Subject
              currentStep={this.state.currentStep} 
              handleChange={this.handleChange}
              subject={this.state.subject}
            />
            <Dates
              currentStep={this.state.currentStep} 
              handleChange={this.handleChange}
              dates={this.state.dates}
            />
            <Price
              currentStep={this.state.currentStep} 
              handleChange={this.handleChange}
              price={this.state.price}
            />    
            <Image
              currentStep={this.state.currentStep} 
              handleChange={this.handleChange}
              image={this.state.image}
            />    
            <Syllabus
              currentStep={this.state.currentStep} 
              handleChange={this.handleChange}
              syllabus={this.state.syllabus}
            />    
            <Location
              currentStep={this.state.currentStep} 
              handleChange={this.handleChange}
              location={this.state.location}
            />    
            <Preview
              currentStep={this.state.currentStep} 
              handleChange={this.handleChange}
              preview={this.state}
            />    
            {this.previousButton}
            {this.nextButton}
          </form>
        </React.Fragment>
      </div>
    )
  }
}

export default Create;
