import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';

class About extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="About">
                <div className="container backColorB brandColorA">
                    <div className="row">
	                <div className="col-sm-offset-1 col-sm-10 col-xs-12">
	                    <h2><b>About Redulo</b></h2>
	                    <div className="col-xs-12">
	                        <p>At Redulo we're revolutionizing education to make it affordable, fun, and flexible. However, we don't compromise in helping students achieve their careers and personal goals. If there is something we aren't doing that will help you achieve your goals, then just let us know!</p>
	                    </div>
	                    <h3><b>What we're doing</b></h3>
	                    <div className="col-xs-12">
	                        <p>Through local teachers, Redulo offers classes in many classes year-round and near you. Skills taught are often in high demand and can open the door to your next opportunity. A lot of our classes are also taken just for fun or to learn something interesting. We are proud that the teachers we work with offer exciting and innovative courses. At Redulo, our mantra is that the students and teachers are in the class because they want to be there.</p>
	                    </div>
	                    <h3><b>How we're doing it</b></h3>
	                    <div className="col-xs-12">
	                        <p>By taking care of all of the administrative tasks for each class, teachers are free to teach and students are free to learn. We ensure that classes have ample space and the resources to make a great environment for learning and working.</p>
	                    </div>
	                </div>
                    </div>
                    <div className="row">
	                <div className="col-sm-offset-1 col-sm-10 col-xs-12">
	                    <h3><b>FAQs</b></h3>
                            <Accordion>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                        How do I apply to Redulo?
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>Signing up takes about one minute and you are automatically accepted. That's it. We don't require any essays or a high GPA to join Redulo. We are happy to provide classes for people that want to learn.</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="1">
                                        How much do courses cost?
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body>Courses are mostly in the $5-10 per hour range. This is much cheaper than private universities and below the cost of most state 2-year colleges. With each class, Redulo tries to offer a variety of freebies, like software licenses and free books so that you won't stop learning after the class.</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="2">
                                        I want to teach. How do I start?
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="2">
                                        <Card.Body>Awesome. Our best teachers are passionate about a subject and love inspiring and teaching others. The best part is you can finally get paid to do this with Redulo. Contact us <a href="/teachers"><u>here</u></a> and we'll be in touch!</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
	                </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
