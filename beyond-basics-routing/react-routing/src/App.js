import React, { Component } from 'react';
import logo from './logo.svg';
import {Link} from 'react-router'
import ProgrammaticExample from './ProgrammaticExample'
import './App.css';

class App extends Component {
  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Router Tutorial</h2>
        </div>
        <p className="App-intro">
          React Router!
        </p>

        <Link to="page">Click Me!</Link><hr/>

        <ProgrammaticExample history={this.props.history} />
        
      </div>
    );
  }
}

export default App;
