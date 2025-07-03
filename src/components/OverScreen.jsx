import React from "react";

export default function OverScreen({ player, computer, onRestart }) {
  let result = "";

  if (player.wins > computer.wins) {
    result = `${player.fullName} Wins!`;
  } else if (player.wins < computer.wins) {
    result = "Computer Wins!";
  } else {
    result = "It's a Tie!";
  }

  return (
    <div className="over-screen">
      <h1 className="result-text">{result}</h1>
      <h2 className="score-text">
        {player.wins} - {computer.wins}
      </h2>
      <button className="again-btn" onClick={onRestart}>
        ?Again
      </button>
    </div>
  );
}
