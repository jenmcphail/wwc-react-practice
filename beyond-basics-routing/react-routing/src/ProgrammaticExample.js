import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css'

export default class ProgrammaticExample extends Component {
  constructor(props){
    super(props)
    this.handleFormSubmit=this.handleFormSubmit.bind(this)
  }
  handleFormSubmit(e){
    e.preventDefault()
    alert("Clicked!")
    const inputNode=this.refs.whatever
    const inputValue=inputNode.value

    this.props.history.push('/query?test=' + inputValue)
  }

  render(){
    return (
      <div>
        <h1>Program Example!</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input ref='whatever' placeholder="Input some shit." />
          <button>ClickyClicky!</button>
        </form>
      </div>
    );
  }
}