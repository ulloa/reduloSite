import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Home from '../Home/index.jsx';
import About from '../About/index.jsx';
import { Link } from 'react-router-dom';
import { Route, Switch } from "react-router-dom";

const linkStyle = {
    color: 'inherit',
}

class App extends Component {

    render() {
        return (
            <div className="App">
                <div class="container">
                    <Container fluid='true'>
                        <header>
                            <h1><Link to="/">Home</Link></h1>
                            <h1><Link to="/about">About</Link></h1>
                        </header>                    
                    </Container>
                    <Switch>
                        <Route path="/about" component={About} />
                        <Route path="/*" component={Home} />
                    </Switch>                
                </div>
            </div>
        );
    }
}

export default App;
