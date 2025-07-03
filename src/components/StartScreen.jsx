import React, { useState } from 'react';

export default function StartScreen({ onStart }) {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleStart = () => {
    if (name.trim() === '') {
      setError('please enter your name');
    } else {
      setError('');
      onStart(name);
    }
  };

  return (
    <div>
      <h1>WAR GAME</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleStart}>Start Game</button>
    </div>
  );
}
