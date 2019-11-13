import React, { Component } from 'react';

class Signup extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      token: '',
      message: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  }

  
  handleSubmit(event) {
    event.preventDefault();
    fetch(`${process.env.REACT_APP_API}/users/signup`,
          {method: "POST",
           mode: "cors",
           headers: {
             "Accept": "application/json",
             "Content-Type": "application/json"},
           body: JSON.stringify({"name": "this.state.name", "email": this.state.email, "password": this.state.password}),
          })
      .then(res => res.json())
      .then(
        result => {
          localStorage.setItem('token', result.token)
          this.setState({
            token: result.token,
            message: result.message,
          });
        },
        error => {
          this.setState({
            message: error.message,
          });
          return;
        }
      );
  }
  
  render() {
    return (
      <div className="container backColorB brandColorA">
	<h3><b>Sign Up</b></h3>
	<form onSubmit={this.handleSubmit}>
	  <input type="hidden" value="{_csrf}" name="_csrf" />
	  <div className="form-group">
	    <input type="text" className="form-control" name="name" placeholder="Name" style={{height: '50px'}} onChange={this.handleInputChange} required />
	  </div>
	  <div className="row" style={{height:'10px'}}></div>
	  <div className="form-group">
	    <input type="text" className="form-control" name="email" placeholder="Email address" style={{height: '50px'}} onChange={this.handleInputChange} required />
	  </div>
	  <div className="row" style={{height:'10px'}}></div>
	  <div className="form-group">
	    <input type="password" className="form-control" name="password" placeholder="Password" style={{height: '50px'}} onChange={this.handleInputChange} required />
	  </div>
	  <div className="row" style={{height:'10px'}}></div>
	  <button type="submit" className="btn btn-warning btn-lg wide">Signup</button>
	</form>
	<div className="row" style={{height:'20px'}}></div>
	<p className="center">By signing up you, you agree to our <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a></p>
	<p className="center">Already have an account? <a href="/login">Login</a></p>
      </div>            
    );
    }
}

export default Signup;
