import React, { useState } from 'react';
import { Player } from './components/Player';

function App() {

  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [counterPlayer1, setCounterPlayer1] = useState(0);
  const [counterPlayer2, setCounterPlayer2] = useState(0);

  const objects = ['Rock', 'Paper', 'Scissors'];

  const randomObject = (objects) => {
    let randomIndex = Math.floor(Math.random() * 3);
    return objects[randomIndex];
  }

  const handleClick = async() => {
    setPlayer1(randomObject(objects));
    setPlayer2(randomObject(objects));

    if((player1 === 'Rock' && player2 === 'Scissors') || (player1 === 'Scissors' && player2 === 'Paper') || (player1 === 'Paper' && player2 === 'Rock')){
      setCounterPlayer1(counterPlayer1 + 1);
      setPlayer1('');
      setPlayer2('');
    } else if((player2 === 'Rock' && player1 === 'Scissors') || (player2 === 'Scissors' && player1 === 'Paper') || (player2 === 'Paper' && player1 === 'Rock')) {
      setCounterPlayer2(counterPlayer2 + 1);
      setPlayer1('');
      setPlayer2('');
    } else {
      setCounterPlayer1(counterPlayer1);
      setCounterPlayer2(counterPlayer2);
    }
  }

  
  return (
    <div className="App">
      <Player number='1' value={player1} counter={counterPlayer1} img={player1 === '' ? `./Ready.svg` : `./${player1}.svg`} />
      <button className="Btn" onClick={handleClick}>Play</button>
      <Player number='2' value={player2} counter={counterPlayer2} img={player2 === '' ? `./Ready.svg` :`./${player2}.svg`} />
    </div>
  );
}

export default App;
