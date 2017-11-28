import React, { Component } from 'react';

class Form extends Component {
  handleChange(e){
    this.props.updateData(e.target.value)
    // console.log(e.target.value)
  }


  render() {
    return (
      <div>
        <input type="text" value={this.props.data} onChange={this.handleChange.bind(this)}/>
      </div>
    );
  }
}

export default Form;
