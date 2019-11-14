import React, { Component } from 'react';

class Profile extends Component {
  
  constructor(props) {
    super(props);
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
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
        },
        error => {
          console.log(error);
        }
      )
  }
  
  
  render() {
    return(
      <div>
        <p>
          haha
        </p>
      </div>
    );
  }  
}

export default Profile;
