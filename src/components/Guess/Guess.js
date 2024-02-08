import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';

const rows = range(0, NUM_OF_GUESSES_ALLOWED, 1);
const columns = range(0, NUM_OF_GUESSES_ALLOWED - 1, 1);

function Guess({ guesses = [], answer }) {
  return (
    <div className='guess-results'>
      {rows.map((row, index) => {
        const guessResults = checkGuess(guesses[row], answer);

        return (
          <p className='guess' key={`row-${index}`}>
            {columns.map((column, index) => {
              const letter = guesses[row] ? guessResults[column].letter : '';
              const className = guesses[row]
                ? `cell ${guessResults[column].status}`
                : 'cell';

              return (
                <span className={className} key={`col-${index}`}>
                  {letter}
                </span>
              );
            })}
          </p>
        );
      })}
    </div>
  );
}

export default Guess;
