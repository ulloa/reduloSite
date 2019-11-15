import React, { Component } from 'react';
import Card from '../../components/Card/index.jsx';

class Profile extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      classes: [],
    }
  }

  componentDidMount() {
    let token = localStorage.getItem('token');
    fetch(`${process.env.REACT_APP_API}/users/self`,
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
        console.log(result.data.teacher);
        this.setState({
          name: result.data.local.name,
          classes: result.data.teacher
        })    
      })
      .catch(errorRes => {
        errorRes.json()
                .then(error => console.log(error))
      })
      .catch(error => {
        console.log(error);
      });

  }  
  
  render() {
    return(
      <div>
        <p>{this.state.name}</p>
        {this.state.classes.map((course, i) => {
          return (
            <Card type="course" data={course.courseid} key={i}>
            </Card>
          );
        })}
      </div>
    );
  }  
}

export default Profile;
