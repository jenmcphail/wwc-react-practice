import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'

export default class ParamsExample extends Component {
  render(){
    console.log(this.props)
    return(
      <div>
        This page is dynamic!
        <br/>
        The current id is: {this.props.params.id}
      </div>
    );
  }
}