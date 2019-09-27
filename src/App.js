import React, { Component } from 'react';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import Instruction from './Instruction';
import Contactus from './Contactus';
import Login from './Login';
import Register from './Register';
import { Router } from '@reach/router';

class App extends Component {

  render() {
    return (
        <div className="container">
          <Header />
          <body />
          <Footer />
        </div>
    );
  }
}

export default App;
