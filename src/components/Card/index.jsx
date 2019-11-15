import React, { Component } from 'react';

const Card = (props) => {
  return (
    <div>
      <p>this is a card</p>
      <p>{props.data._id}</p>
    </div>
  );
}

export default Card;
