import React from 'react';
import './card.styles.css';

export const Card = (props) => (
  <div className="card-container">
    <img
      alt="member"
      src={`https://robohash.org/set_set5/bgset_any/size_200x200/${props.member.id}`}
    />
    <h2 key={props.member.id}> {props.member.name} </h2>
    <p>{props.member.email}</p>
  </div>
);