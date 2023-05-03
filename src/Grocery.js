import React from 'react';

const Grocery = ({ title, quantity, purchased, starred, onPurchase, onStar, onDelete }) => {
  return (
    <article className={`Grocery ${starred && 'starred' }`}>
      <h3>{title}</h3>
      <p>Quantity: {quantity}</p>
      <p></p>
    </article>
  );
};

export default Grocery;