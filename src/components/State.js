import React, { Component } from 'react';

export default class State extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increase = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increase}>Increase</button>
      </div>
    );
  }
}
