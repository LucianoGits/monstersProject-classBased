import { Component } from 'react';
import CardListComponents from './Components/card-list/CardListComponent';

class App extends Component {
  // in a class component we use a "constructor" followed by "super()" and we call a useState by using the keyword "this.state"
  constructor() {
    super();

    // this is setting a state
    this.state = {
      monsters: [],
      searchField: '',
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

  // this is an arrow function(more accurately it is a METHOD) for the searching inputs and we will insert it on the "onChange" that is in the serach box
  onSearchChange = (e) => {
    //we take the 'searchField' from the state and we pass in the event paramenter and set it to lower case
    const searchField = e.target.value.toLocaleLowerCase();

    // here we update the state or setState to our newly made searchField
    this.setState(() => {
      return { searchField };
    });
  };

  //rendering part
  render() {
    // this is "destructuring" because instead of using "this." everywhere we can just call the methods where we want to use them e.g instead of writing "this.state.monsters" we can just write "monsters"
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    //its a function that creates new array from the monsters array and will later be used to map the monsters names
    const filteredMonsters = monsters.filter((monsterNames) => {
      return monsterNames.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="Search Monsters"
          //this "onChange"property is an anonymous function(a function that is not stored anywhere in a variable)  that will allow us to get a result when there is any type of change on the input box
          onChange={onSearchChange}
        />

        <CardListComponents monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
