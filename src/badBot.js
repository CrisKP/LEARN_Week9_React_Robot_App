import React, { Component } from 'react';

class BadBot extends Component {
  render() {
    var x = 'bla';
      return (
          <div>
            <h2>Bad Robot</h2>
            <br />
            <p>I hear you saying {x.repeat(this.props.updateData.length)}. Is that correct?</p>
          </div>
        );
      }
    }

export default BadBot
