import React, { Component } from 'react';

class Login extends Component {
    
    constructor(props) {
        super(props);
    }


    render() {
        return(
            <div className="container backColorB brandColorA">
	        <h3><b>Login</b></h3>
	        <form action="/login" method="post">
	            <input type="hidden" value="{_csrf}" name="_csrf" />
	            <div className="form-group">
	                <input type="text" className="form-control" name="name" placeholder="Full Name" style={{height: '50px'}} required />
	            </div>
	            <div className="form-group">
	                <input type="text" className="form-control" name="email" placeholder="Email address" style={{height: '50px'}} required />
	            </div>
	            <div className="row" style={{height:'10px'}}></div>
	            <div className="form-group">
	                <input type="password" className="form-control" name="password" placeholder="Password" style={{height: '50px'}} required />
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
