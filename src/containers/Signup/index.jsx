import React, { Component } from 'react';

class Signup extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="container backColorB brandColorA">
	        <h3><b>Sign Up</b></h3>
	        <form action="/signup" method="post">
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
	            <button type="submit" class="btn btn-warning btn-lg wide">Sign Up</button>
	        </form>
	        <div class="row" style={{height:'20px'}}></div>
	        <p class="center">By signing up you, you agree to our <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a></p>
	        <p class="center">Already have an account? <a href="/login">Login</a></p>
            </div>            
        );
    }
}

export default Signup;
