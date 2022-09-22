import React, { Component } from 'react';

export default class CardListComponents extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div>
        {monsters.map((monsterName) => (
          <h1 key={monsterName.id}>{monsterName.name} </h1>
        ))}
      </div>
    );
  }
}
