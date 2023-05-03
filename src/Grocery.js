import React from 'react';

const Grocery = ({ name, quantity, purchased, starred, onPurchase, onStar, onDeleter }) =>
{
  return (
    <article className="Grocery">
      <h3>{name}</h3>
    </article>
  );
};

export default Grocery;