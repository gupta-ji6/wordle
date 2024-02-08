import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessInputValue, setGuessInputValue] = useState('');

  const handleGuessInputOnChange = (event) => {
    setGuessInputValue(event.target.value.toUpperCase());
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log({ guess: guessInputValue });
    setGuessInputValue('');
  };

  return (
    <form className='guess-input-wrapper' onSubmit={handleFormSubmit}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        type='text'
        value={guessInputValue}
        onChange={handleGuessInputOnChange}
        pattern='^[a-zA-Z]{5}$'
      />
    </form>
  );
}

export default Game;
