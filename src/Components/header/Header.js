import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className={`app-title ${this.props.className}`}>Monsters App</div>
    );
  }
}
