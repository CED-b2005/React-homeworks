//rcc
import React, { Component } from 'react';
import App from './app/App';

export default class Member extends App {
  render() {
    return (
      <div>
        <h1>{this.state.field.name}</h1>
        <h1>{this.state.field.email}</h1>
      </div>
    );
  }
}
