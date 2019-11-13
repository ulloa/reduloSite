import React, { Component } from 'react';

import logo from '../../logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import About from '../About/index.jsx';
import Classes from '../Classes/index.jsx';
import Create from '../Create/index.jsx';
import Home from '../Home/index.jsx';
import Learn from '../Learn/index.jsx';
import Login from '../Login/index.jsx';
import Privacy from '../Privacy/index.jsx';
import Signup from '../Signup/index.jsx';
import Teach from '../Teach/index.jsx';
import Terms from '../Terms/index.jsx';

import { Link } from 'react-router-dom';
import { Route, Switch } from "react-router-dom";

const linkStyle = {
  color: 'inherit',
}

class App extends Component {

  logout() {
    localStorage.removeItem("token")
  }
  
  render() {
    return (
      <div className="App">
        <div className="container">
          <Container fluid='true'>
            <header>
              <h1><Link to="/">Home</Link></h1>
              <h1><Link to="/about">About</Link></h1>
              <h1><Link to="/classes">Classes</Link></h1>
              <h1><Link to="/learn">Learn</Link></h1>
              <h1><Link to="/login">Login</Link></h1>
              <h1><Link to="/signup">Signup</Link></h1>
              <h1><Link to="/teach">Teach</Link></h1>
              <h1><Link to="/privacy">Privacy Policy</Link></h1>
              <h1><Link to="/terms">Terms of Use</Link></h1>
              <Button onClick={this.logout}>Logout</Button>
            </header>
          </Container>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/classes" component={Classes} />
            <Route path="/create" component={Create} />
            <Route path="/learn" component={Learn} />
            <Route path="/login" component={Login} />
            <Route path="/privacy" component={Privacy} />
            <Route path="/signup" component={Signup} />
            <Route path="/teach" component={Teach} />
            <Route path="/terms" component={Terms} />
            <Route path="/*" component={Home} />
          </Switch>                
        </div>
      </div>
    );
    }
}

export default App;
