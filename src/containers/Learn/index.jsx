import React, { Component } from 'react';

class Learn extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="container-fluid center">
                <div style={{height:'400px'}} id="room">
	            <div class="row mygrids altcenter">
	                <h1 class="center"><b>Reserve your seat</b></h1>
	                <p class="pheads" style={{color:'white'}}>We'll take care of everything else</p>
	                <a href="/signup" role="button" class="btn btn-primary browse">Sign Up For Free</a>
	            </div>
                </div>
                <div class="row mygrids">
	            <div class="container">
	                <div class="row">
	                    <div class="col-xs-12">
	                        <h1><b>How it works</b></h1>
	                        <p>Becoming a student at Redulo is as simple as signing up with your name, password, and email</p>
	                        <p>Find and enroll in classes that you like and fit your schedule</p>
	                        <p>Each class has a goal for enrollment. If enough students enroll, then the students will be charged and the class will be officially scheduled.</p>
	                        <p>If a class don't have enough demand, then it is cancelled two weeks prior to the start date and no one is charged.</p>
	                    </div>
	                </div>
	                <hr />
	                <div class="row">
	                    <h1><b>Student Perks</b></h1>
	                    <div class="col-sm-4 col-xs-12 mygrids">
	                        <div class="col-xs-12">
		                    <i class="glyphicon glyphicon-briefcase bigico"></i>
		                    <h3>Career services</h3>
		                    <p class="text-muted">Get career counseling and help finding a job.</p>
	                        </div>
	                    </div>
	                    <div class="col-sm-4 col-xs-12 mygrids">
	                        <div class="col-xs-12">
		                    <i class="glyphicon glyphicon-calendar bigico"></i>
		                    <h3>Student life events</h3>
		                    <p class="text-muted">Join themed parties and competitions that we host year-round.</p>
	                        </div>
	                    </div>
	                    <div class="col-sm-4 col-xs-12 mygrids">
	                        <div class="col-xs-12">
		                    <i class="glyphicon glyphicon-credit-card bigico"></i>
		                    <h3>School swag</h3>
		                    <p class="text-muted">Receive a student id and much more</p>
	                        </div>
	                    </div>
	                </div>
	            </div>
                </div>
            </div>
        );
    }

}

export default Learn;
