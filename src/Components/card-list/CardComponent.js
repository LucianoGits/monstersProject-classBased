import React, { Component } from 'react';
import './css/card.css';

export default class Card extends Component {
  render() {
    const { id, name, email } = this.props.monsterName;
    return (
      <div className="card-container">
        <img
          src={`https://robohash.org/${id}?set=set1`}
          alt={`monster ${name}`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}
