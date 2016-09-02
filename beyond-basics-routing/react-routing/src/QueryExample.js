import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css'

export default class QueryExample extends Component {
  render(){
    const location = this.props.location
    return (
      <div>
        The query param test = {location.query.test}
      </div>
    );
  }
}