import React, { useState } from 'react';
import Cards from './Cards';
import Player from './Player';

export default function GameScreen({ player, computer, setPlayer, setComputer, onGameOver }) {
  const [round, setRound] = useState(0);

  const playRound = () => {
    const pCard = player.cards[round];
    const cCard = computer.cards[round];
    let pWins = player.wins;
    let cWins = computer.wins;

    if (pCard.value > cCard.value) pWins++;
    else if (cCard.value > pCard.value) cWins++;

    setPlayer({ ...player, wins: pWins });
    setComputer({ ...computer, wins: cWins });

    if (round === 25) onGameOver();
    else setRound(round + 1);
  };

  return (
    <div className='game-screen'>
      <h2>Round {round + 1}</h2>
      <label className='computer-label'>Computer</label>
      <Cards card={computer.cards[round]}  />
      <Cards card={player.cards[round]}  />
      <label className='player-label'>{player.fullName}</label>
      <button onClick={playRound}>Next</button>
      <Player player={player} />
    </div>
  );
}