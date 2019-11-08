import React, { Component } from 'react';

class Teach extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="container-fluid center">
                <div style={{height:'400px'}} id="leaves">
	            <div class="row mygrids altcenter">
	                <h1 class="heads center"><b>Teach and earn money at Redulo</b></h1>
	                <p class="pheads" style={{color:'white'}}>Impact the world by teaching something you love, plus earn money doing it.</p>
	                <a href="/create" role="button" class="btn btn-primary browse">Teach a Course</a>
	            </div>
                </div>
                <div class="row mygrids">
	            <h1><b>What it's like</b></h1>
	            <p>Teachers have the opportunity to set their course structure without having to worry about adminstrative costs.</p>
	            <p>Our simple form is quick and let's you get started within minutes</p>
	            <div class="row">
	                <div class="col-sm-offset-2 col-sm-4 col-xs-12 mygrids">
	                    <div class="col-xs-12">
	                        <i class="glyphicon glyphicon-calendar bigico"></i>
	                        <h3>Self-employment</h3>
	                        <p class="text-muted">Set your own schedule and be free.</p>
	                    </div>
	                </div>
	                <div class="col-sm-4 col-xs-12 mygrids">
	                    <div class="col-xs-12">
	                        <i class="glyphicon glyphicon-usd bigico"></i>
	                        <h3>Get paid</h3>
	                        <p class="text-muted">Payment is digital and will be based upon your class enrollment.</p>
	                    </div>
	                </div>
	            </div>
	            <div class="row">
	                <div class="col-sm-offset-2 col-sm-4 col-xs-12 mygrids">
	                    <div class="col-xs-12">
	                        <i class="glyphicon glyphicon-bullhorn bigico"></i>
	                        <h3>Promotion</h3>
	                        <p class="text-muted">Redulo will market you and the class locally.</p>
	                    </div>
	                </div>
	                <div class="col-sm-4 col-xs-12 mygrids">
	                    <div class="col-xs-12">
	                        <i class="glyphicon glyphicon-globe bigico"></i>
	                        <h3>And much more</h3>
	                        <p class="text-muted">From swag to more conferences, we are working to get more for our students.</p>
	                    </div>
	                </div>
	            </div>
	            <br />
	            <br />
	            <div class="col-sm-offset-2 col-sm-8 nopadding">
	                <div class="panel panel-default">
	                    <div class="panel-body">
	                        <div class="row">
		                    <h2 class="center"><b>Premium Service</b></h2>
	                        </div>
	                        <div class="row">
		                    <div class="col-sm-6">
		                        <p>Fee for free classes</p>
		                    </div>
		                    <div class="col-sm-4">
		                        <p>No fees.</p>
		                    </div>
	                        </div>
	                        <div class="row">
		                    <div class="col-sm-6">
		                        <p>Fee for paid classes</p>
		                    </div>
		                    <div class="col-sm-4">
		                        <p>Payment Processing Fee + Redulo fee</p>
		                        <p>$0.30 + 5%</p>
		                    </div>
	                        </div>
	                        <div class="row">
		                    <div class="col-sm-6">
		                        <p>Course Creation Tool</p>
		                    </div>
		                    <div class="col-sm-4">
		                        <p>X</p>
		                    </div>
	                        </div>
	                        <div class="row">
		                    <div class="col-sm-6">
		                        <p>Secure payments</p>
		                    </div>
		                    <div class="col-sm-4">
		                        <p>X</p>
		                    </div>
	                        </div>
	                        <div class="row">
		                    <div class="col-sm-6">
		                        <p>Certificates for students</p>
		                    </div>
		                    <div class="col-sm-4">
		                        <p>X</p>
		                    </div>
	                        </div>
	                        <div class="row">
		                    <div class="col-sm-6">
		                        <p>Gradebook</p>
		                    </div>
		                    <div class="col-sm-4">
		                        <p>X</p>
		                    </div>
	                        </div>
	                        <div class="row">
		                    <div class="col-sm-6">
		                        <p>Slack Channel</p>
		                    </div>
		                    <div class="col-sm-4">
		                        <p>X</p>
		                    </div>
	                        </div>
	                        <div class="row">
		                    <div class="col-sm-6">
		                        <p>Real customer support</p>
		                    </div>
		                    <div class="col-sm-4">
		                        <p>X</p>
		                    </div>
	                        </div>
	                    </div>
	                </div>
	            </div>
                </div>
            </div>
        );
    }

}

export default Teach;
