import React from 'react';

export default function Cards({ card, label }) {
  return (
    <div className="card">
      <h4>{label}</h4>
      <p>{card.value} {card.suit}</p>
    </div>
  );
}