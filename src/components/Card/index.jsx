import React, { Component } from 'react';

const Card = (props) => {
  return (
    <div>
      <p>this is a card</p>
      <p onClick={() => props.handleClick(props.data._id)}>{props.data._id}</p>
      <p>{props.data.title}</p>
    </div>
  );
} 

export default Card;
