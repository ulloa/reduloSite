import React, { Component } from 'react';

class Home extends Component {
  
  constructor(props) {
    super(props);

  }
    render() {
        return (
            <div className="Home">
                <div className="panel panel-default backColorB testheight" >
                    <div className="container-fluid testheight" id="power">
	                <div className="col-xs-12 center altcenter">
	                    <div className="row">
	                        <h1 className="heads" style={{color:'white'}}><b>Empowering students and teachers</b></h1>
	                        <p className="pheads" style={{color:'white'}}>We want everyone to be able to chase their dreams and share their passions</p>
	                        <a href="/courses" role="button" className="btn btn-primary browse">Browse Courses</a>
	                    </div>
	                </div>
                    </div>
                </div>
                <div className="panel panel-default minidiv">
                    <div className="col-xs-12 altcenter center">
	                <div className="row" style={{height:'50px'}}>
	                    <img src="/images/brand/crest/redulo.crest.100x100.Y.png" style={{height:'100%'}} />
	                </div>
	                <h1 className="heads">Student Centered Education</h1>
	                <p className="pheads">Each class at Redulo is started by passionate teachers and only happen if students demand it</p>
	                <a href="/students" role="button" className="btn btn-primary browse">Learn More</a>
                    </div>
                </div>

            </div>
        );
    }
}

export default Home;
