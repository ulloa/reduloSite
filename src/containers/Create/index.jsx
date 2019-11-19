import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import Card from '../../components/Card/index.jsx';

// utilty and conversion tools
import DayPicker, { DateUtils } from 'react-day-picker';
import {geocodeByAddress, getLatLng} from 'react-places-autocomplete';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

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
      loaded: false,
      editorState: null,
      title: '',
      image: '',
      subject: '',
      subsubject: '',
      tagline: '',
      workload: '',
      location: '',
      address: '',
      bio: '',
      contact: '',
      chat: '',
      plan: '',
      date: '',
      syllabus: '',
      goals: [{id: '', name: ''}]
    }
    this.handleChange = this.handleChange.bind(this);
    this.addGoal = this.addGoal.bind(this);
    this.handleGoalListChange = this.handleGoalListChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this._next = this._next.bind(this)
    this._prev = this._prev.bind(this)
  }

  componentDidMount() {
    const editorState = EditorState.createEmpty();
    this.setState({editorState});
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
          Object.keys(result.data).forEach((key) => {
            if (key == 'date') {
              let formattedDates = result.data.date.map(date => new Date(date));
              this.setState({date: formattedDates});
            } else if (key == 'syllabus') {
              const html = result.data.syllabus;
              const contentBlock = htmlToDraft(html);
              if (contentBlock) {
                const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
                const editorState = EditorState.createWithContent(contentState);
                this.state = {
                  editorState,
                };
              }
            } else {
              this.setState({
                [key]: result.data[key]
              });

              const googleMapScript = document.createElement('script');
              googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${"AIzaSyC6FEc3sgamXkwxDxcBGCtF9W6kU8CXRW0"}&libraries=places`;
              window.document.body.appendChild(googleMapScript);              
            }
          });
          this.setState({
            loaded: true
          });
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

  previousButton(){
    let currentStep = this.state.currentStep;
    if(currentStep !==1){
      return (
        <button 
          className="btn btn-secondary" 
          type="button" onClick={this._prev}>
          Previous
        </button>
      )
    }
    return null;
  }

  nextButton(){
    let currentStep = this.state.currentStep;
    if(currentStep < 10){
      return (        
        <button 
          className="btn btn-primary float-right" 
          type="button" onClick={this._next}>
          Next
        </button>        
      )
    }
    return null;
  }

  saveButton(){
    let currentStep = this.state.currentStep;
    return (
      <button 
        className="btn btn-secondary" 
        type="button" onClick={this.handleSubmit}>
        Save
      </button>
    )
  }
  
  // Use the submitted data to set the state
  handleChange(event) {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSelect(address) {
    // have the option of doing something with the geocode here
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  }
  
  // Trigger an alert on form submission
  handleSubmit = (event) => {
    event.preventDefault();
    const syllabus = draftToHtml(this.state.editorState.getCurrentContent());
    let token = localStorage.getItem('token');
    this.setState({syllabus});
    fetch(`${process.env.REACT_APP_API}/courses/edit/${this.state.courseId}`,
          {method: "POST",
           mode: "cors",
           headers: {
             "Accept": "application/json",
             "Content-Type": "application/json",
             "Authorization": `Bearer ${token}`,
           },
           body: JSON.stringify(this.state, (key, val) => {
             if (key != 'editorState')
               return val;
           })
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

  addGoal(e) {
    let goals = this.state.goals.slice();
    goals.push({name: ''});
    this.setState({goals: goals});
  }

  handleGoalListChange(event, index) {
    let goals = this.state.goals.slice();
    goals[index].name = event.target.value;
    this.setState({goals: goals});
  }


  handleDateChange(day, { selected }) {
    let selectedDays = this.state.date;
    if (selected) {
      const selectedIndex = selectedDays.findIndex(selectedDay =>
        DateUtils.isSameDay(selectedDay, day)
      );
      selectedDays.splice(selectedIndex, 1);
    } else {
      selectedDays.push(day);
    }
    this.setState({date: selectedDays});
  }  
  
  render() {
    if (this.state.loaded) {
      return(
        <div className="Create">
          <React.Fragment>
            <h1>A Wizard Form!</h1>
            <p>Step {this.state.currentStep} </p> 
            <div>              
              <Features
                currentStep={this.state.currentStep} 
                handleChange={this.handleChange}
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
                addGoal={this.addGoal}
                handleGoalListChange={this.handleGoalListChange}
              />
              <Subject
                currentStep={this.state.currentStep} 
                handleChange={this.handleChange}
                subject={this.state.subject}
              />
              <Dates
                currentStep={this.state.currentStep} 
                handleChange={this.handleChange}
                dates={this.state.date}
                handleDateChange={this.handleDateChange}
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
                editorState={this.state.editorState}              
              />    
              <Location
                currentStep={this.state.currentStep} 
                handleChange={this.handleChange}
                location={this.state.location}
                handleSelect={this.handleSelect}
              />    
              <Preview
                currentStep={this.state.currentStep} 
                handleChange={this.handleChange}
                preview={this.state}
              />    
              {this.previousButton()}
              {this.nextButton()}
            </div>
            {this.saveButton()}
          </React.Fragment>
        </div>
      );
    } else {
      return (
        <div className="Create">
          <React.Fragment>
            <Spinner animation="grow" variant="warning" />
          </React.Fragment>
        </div>
      );
    }
  }
}

export default Create;
