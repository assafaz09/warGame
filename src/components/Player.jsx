import React from 'react';

export default function Player({ player }) {
  return (
    <div className="player-info">
      <h3>{player.fullName}</h3>
      <p>Wins: {player.wins}</p>
    </div>
  );
}