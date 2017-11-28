import React, { Component } from 'react';

class GoodBot extends Component {
  render() {

      return (
          <div>
            <h2>Good Robot</h2>
            <br />
            <p>I hear you saying {this.props.updateData}. Is that correct?</p>
          </div>
        );

      }

    }

export default GoodBot
