import React, { Component } from 'react';

class Login extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
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
    fetch(`${process.env.REACT_APP_API}/users/login`,
          {method: "POST",
           mode: "cors",
           headers: {
             "Accept": "application/json",
             "Content-Type": "application/json"},
           body: JSON.stringify({"email": this.state.email, "password": this.state.password}),
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
    return(
      <div className="container backColorB brandColorA">
	<h3><b>Login</b></h3>
	<form onSubmit={this.handleSubmit}>
	  <input type="hidden" value="{_csrf}" name="_csrf" />
	  <div className="form-group">
	    <input type="text" className="form-control" name="email" placeholder="Email address" style={{height: '50px'}} onChange={this.handleInputChange} required />
	  </div>
	  <div className="row" style={{height:'10px'}}></div>
	  <div className="form-group">
	    <input type="password" className="form-control" name="password" placeholder="Password" style={{height: '50px'}} onChange={this.handleInputChange} required />
	  </div>
	  <div className="row" style={{height:'10px'}}></div>
	  <button type="submit" className="btn btn-warning btn-lg wide">Login</button>
	</form>
	<div className="row" style={{height:'20px'}}></div>
	<p className="center"><a href="/forgot">Forgot Password?</a></p>
	<p className="center">Need an account? <a href="/signup">Sign Up.</a></p>
      </div>
    );
  }
}

export default Login;
