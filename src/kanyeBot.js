import React, { Component } from 'react';

class KanyeBot extends Component {
  render() {

      return (
          <div>
            <h2>Kanyebot Robot</h2>
            <br />
            <p>{"I'm gonna let you finish but Beyonce is"} {this.props.updateData}.</p>
          </div>
        );

      }

    }

export default KanyeBot
