import React, { useState } from 'react';
import StartScreen from './components/StartScreen';
import GameScreen from './components/GameScreen';
import OverScreen from './components/OverScreen';
import './App.css';

function App() {
  const [gameStage, setGameStage] = useState('start');
  const [player, setPlayer] = useState(null);
  const [computer, setComputer] = useState(null);

  const createDeck = () => {
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const deck = [];
    for (let suit of suits) {
      for (let value = 1; value <= 13; value++) {
        deck.push({ suit, value });
      }
    }
    return deck.sort(() => Math.random() - 0.5);
  };

  const startGame = (fullName) => {
    const deck = createDeck();
    const playerCards = deck.slice(0, 26);
    const computerCards = deck.slice(26);
    setPlayer({ fullName, cards: playerCards, wins: 0 });
    setComputer({ fullName: 'Computer', cards: computerCards, wins: 0 });
    setGameStage('game');
  };

  const endGame = () => setGameStage('end');

  const restart = () => {
    setGameStage('start');
    setPlayer(null);
    setComputer(null);
  };

  return (
    <>
      {gameStage === 'start' && <StartScreen onStart={startGame} />}
      {gameStage === 'game' && (
        <GameScreen
          player={player}
          computer={computer}
          setPlayer={setPlayer}
          setComputer={setComputer}
          onGameOver={endGame}
        />
      )}
      {gameStage === 'end' && <OverScreen player={player} computer={computer} onRestart={restart} />}
    </>
  );
}

export default App;