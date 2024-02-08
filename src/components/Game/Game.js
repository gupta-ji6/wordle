import React, { useEffect, useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Guess from '../Guess/Guess';
import { checkGuess } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Banner from '../Banner/Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessInputValue, setGuessInputValue] = useState('');
  const [guesses, setGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState('');

  useEffect(() => {
    if (guesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }, [guesses]);

  const handleGuessInputOnChange = (event) => {
    setGuessInputValue(event.target.value.toUpperCase());
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setGuessInputValue('');
    setGuesses([...guesses, guessInputValue]);

    const guessResults = checkGuess(guessInputValue, answer);

    if (guessResults !== null) {
      const isCorrectGuess = Object.values(guessResults).every(
        (guess) => guess.status === 'correct'
      );
      if (isCorrectGuess) {
        setGameStatus('won');
      }
    }
  };

  return (
    <React.Fragment>
      <Guess guesses={guesses} answer={answer} />
      <form className='guess-input-wrapper' onSubmit={handleFormSubmit}>
        <label htmlFor='guess-input'>Enter guess:</label>
        <input
          id='guess-input'
          type='text'
          value={guessInputValue}
          onChange={handleGuessInputOnChange}
          pattern='^[a-zA-Z]{5}$'
          disabled={gameStatus === 'won' || gameStatus === 'lost'}
        />
      </form>

      {gameStatus ? (
        <Banner
          type={gameStatus === 'won' ? 'happy' : 'sad'}
          numberOfGuesses={guesses.length}
          answer={answer}
        />
      ) : null}
    </React.Fragment>
  );
}

export default Game;
