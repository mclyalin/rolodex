import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      members: [
        {
          name: 'Papa',
          id: 'id1'
        },
        {
          name: 'Mama',
          id: 'id1'
        },
        {
          name: 'Child1',
          id: 'id1'
        },
        {
          name: 'Child2',
          id: 'id1'
        },
      ],
    };
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
