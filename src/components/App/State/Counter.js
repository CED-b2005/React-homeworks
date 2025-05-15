import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increase = () => {
    this.setState({ count: this.state.count + 1 });
  };
  reduce = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
        <h1 style={{ fontSize: '2rem', color: '#333' }}>
          Giá Trị: {this.state.count}
        </h1>
        <button
          onClick={this.increase}
          style={{
            padding: '10px 20px',
            fontSize: '1rem',
            backgroundColor: '#00b894',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Tăng
        </button>
        <button
          onClick={this.reduce}
          style={{
            margin: '10px 20px',
            padding: '10px 20px',
            fontSize: '1rem',
            backgroundColor: '#00b894',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Giảm
        </button>
      </div>
    );
  }
}
