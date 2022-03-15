import React from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = { 
      members: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ members: users }));
  }

  render() {
    return (
      <div className="App">
        <input type="search" placeholder="search memebers" />
        <CardList members={this.state.members} />
      </div>
    );
  }
}

export default App;
