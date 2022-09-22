import { Component } from 'react';

class App extends Component {
  // in a class component we use a "constructor" followed by "super()" and we call a useState by using the keyword "this.state"
  constructor() {
    super();

    // this is setting a state
    this.state = {
      monsters: [],
    };
  }

  //this is a component life cycle and its best used when we want a promise like fetch (remote API request)
  componentDidMount() {
    //first we fetch data from remote place using 'fetch
    fetch('https://jsonplaceholder.typicode.com/users')
      //then we take the response from the site and turn it into json
      .then((response) => response.json())
      // then we take the first ".then" and pass "users" and callback "setState" to return users inside our state "monsters" array
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  render() {
    return (
      <div className="App">
        {/* this is how you callBack of the state. we map how state which in this
        case it would be the empty array of 'monsters' */}
        {this.state.monsters.map((monsters) => {
          // we want the monsters to return a map in a div and we set the key inside the div
          return <div key={monsters.id}>{monsters.name}</div>;
        })}
      </div>
    );
  }
}

export default App;
