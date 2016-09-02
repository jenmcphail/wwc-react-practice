import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  static propType={
    showHeader: React.propTypes.bool
  }
  constructor (props){
    super(props)
    this.state = {
      clicked: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    if (this.props.showHeader){
      var header = (
        <span>
          Header here
        </span>
        )
    } else {
      var header = null
    }

    if (this.state.clicked) {
      var paragraphStyle = {
        color: 'green',
        fontSize: '50px'
      } else {
        var paragraphStyle = {
          color: 'red',
        }
      }
    }
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro" style={paragraphStyle}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.handleClick}>Click Me!</button>
      </div>
    );
  }
}

export default App;
