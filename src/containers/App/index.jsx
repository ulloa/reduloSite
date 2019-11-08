import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { Route, Switch } from "react-router-dom";

const linkStyle = {
    color: 'inherit',
}

function App() {
    return (
        <div className="App">
            <div class="container">
                <Container fluid='true'>
                    <header>
                        <h1>haha</h1>
                    </header>                    
                </Container>
                <Switch>
                </Switch>                
            </div>
        </div>
    );
}

export default App;
