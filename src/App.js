import React, { Component } from 'react';
import './App.css';
import Form from './form.js';
import GoodBot from './goodBot.js';
import BadBot from './badBot.js';
import KanyeBot from './kanyeBot.js';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: ''
    }
  }

  updateData(e){
    this.setState({data: e})
    console.log(e)
  }

  render() {
    return (
      <div>
        <Form data={this.state.data} updateData={this.updateData.bind(this)}/>
        <br />
        <GoodBot updateData={this.state.data}/>
        <BadBot updateData={this.state.data}/>
        <KanyeBot updateData={this.state.data}/>
      </div>
    );
  }
}

export default App;
