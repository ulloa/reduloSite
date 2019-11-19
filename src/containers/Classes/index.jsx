import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '../../components/Card/index.jsx';

class Classes extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      classes: [],
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    let token = localStorage.getItem('token');
    fetch(`${process.env.REACT_APP_API}/courses/`,
          {method: "GET",
           mode: "cors",
           headers: {
             "Accept": "application/json",
             "Content-Type": "application/json",
             "Authorization": `Bearer ${token}`,
           },
          })
      .then(res => {
        if (res.status >= 400)
          throw res;
        else
          return res.json();
      })
      .then(result => {
        this.setState({
          classes: result.data
        })    
      })
      .catch(errorRes => {
        errorRes.json()
                .then(error => console.log(error))
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleClick(id) {
    this.props.history.push({
      pathname: '/create',
      // search: '?class=id1231231', 
      state: {courseId: id}
    });
  }
  
  render() {
    return(
      <div className="Classes">
        <h2><b>Featured Classes</b></h2>
        <Row>
          <Col>
	    <h4><b>Location</b></h4>
          </Col>
          <Col>
            <input type="text" />
          </Col>
        </Row>
        <Row>
          <Col>
            <h4><b>Filter by subject</b></h4>
          </Col>
          <Col>
            <h4><b>Choose a subject</b></h4>
          </Col>          
        </Row>
        <Row>
          <Col>
            <div className="row">
	      <div className="col-sm-2 col-xs-12">
	        <h4><b>Search by topic</b></h4>
	      </div>
	      <div className="col-sm-10 col-xs-12">
	        <input type="text" placeholder="Enter a topic"/>
	      </div>
	    </div>
          </Col>
          <Col>
          </Col>
        </Row>
        <Row>
          {this.state.classes.map((course, i) => {
            return (
              <Card
                type="course"
                data={course}
                key={i}
                handleClick={this.handleClick}>>
              </Card>
            );
          })}
        </Row>
      </div>
    );
  }
}

export default Classes;
