import React from 'react';
import './card-list.styles.css';

export const CardList = (props) => (
  <div className='card-list'>
    {this.state.members.map(member => (
      <h1 key={member.id}> {member.name} </h1>
    ))}
  </div>
);