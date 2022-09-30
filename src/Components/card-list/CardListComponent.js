import React, { Component } from 'react';
import Card from './CardComponent';
import './css/cardlist.css';

export default class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monsterName) => {
          return <Card key={monsterName.id} monsterName={monsterName} />;
        })}
      </div>
    );
  }
}
