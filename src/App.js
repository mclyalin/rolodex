import React from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = { 
      members: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ members: users }));
  }

  render() {
    const { members, searchField } = this.state;
    const filteredMembers = members.filter(member =>
      member.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <SearchBox
          placeholder="search memebers"
          handleChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList members={filteredMembers} />
      </div>
    );
  }
}

export default App;
