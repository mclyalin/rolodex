import React from 'react';
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
        {
          this.state.members.map(member => <h1 key={member.id}> { member.name } </h1>)
        }
      </div>
    );
  }
}

export default App;
