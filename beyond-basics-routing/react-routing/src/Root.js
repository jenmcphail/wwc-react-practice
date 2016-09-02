import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css'

export default class Root extends Component {
  render(){
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}