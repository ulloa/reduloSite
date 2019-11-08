import React, { Component } from 'react';

class Login extends Component {
    
    constructor(props) {
        super(props);
    }


    render() {
        return(
            <div class="container backColorB brandColorA">
	        <h3><b>Login</b></h3>
	        <form action="/login" method="post">
	            <input type="hidden" value="{_csrf}" name="_csrf" />
	            <div class="form-group">
	                <input type="text" class="form-control" name="name" placeholder="Full Name" style={{height: '50px'}} required />
	            </div>
	            <div class="form-group">
	                <input type="text" class="form-control" name="email" placeholder="Email address" style={{height: '50px'}} required />
	            </div>
	            <div class="row" style={{height:'10px'}}></div>
	            <div class="form-group">
	                <input type="password" class="form-control" name="password" placeholder="Password" style={{height: '50px'}} required />
	            </div>
	            <div class="row" style={{height:'10px'}}></div>
	            <button type="submit" class="btn btn-warning btn-lg wide">Login</button>
	        </form>
	        <div class="row" style={{height:'20px'}}></div>
	        <p class="center"><a href="/forgot">Forgot Password?</a></p>
	        <p class="center">Need an account? <a href="/signup">Sign Up.</a></p>
            </div>
        );
    }
}

export default Login;
