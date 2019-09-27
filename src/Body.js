import React, { Component } from 'react';
import { Router } from '@reach/router';
import Home from './Home';
import Information from './Information';
import Contactus from './Contactus';
import Login from './Login';
import Register from './Register';
import Bodyhead from './Bodyhead';

class Body extends Component {

  render() {
    return (
        <Bodyhead />
        <Router>
            <Home path='/home'/>
            <Instruction path='/instruction'/>
            <Contactus path='/contactus'/>
            <Login path='/login'/>
            <Register path='/register'/>
        </Router>
    );
  }
}

export default Body;
