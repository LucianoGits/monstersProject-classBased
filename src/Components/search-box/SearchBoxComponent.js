import React, { Component } from 'react';
import './css/search-box-styles.css';

export default class SearchBox extends Component {
  render() {
    return (
      <input
        className={`search-box ${this.props.className}`}
        type="search"
        placeholder={this.props.placeHolder}
        //this "onChange"property is an anonymous function(a function that is not stored anywhere in a variable)  that will allow us to get a result when there is any type of change on the input box
        onChange={this.props.onChangeHandler}
      />
    );
  }
}
