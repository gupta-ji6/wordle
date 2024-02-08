import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

const rows = range(0, NUM_OF_GUESSES_ALLOWED, 1);
const columns = range(0, NUM_OF_GUESSES_ALLOWED - 1, 1);

function Guess({ items = [] }) {
  return (
    <div className='guess-results'>
      {rows.map((row, index) => {
        return (
          <p className='guess' key={`item-${index}`}>
            {columns.map((column, index) => {
              const letter = items[row] ? items[row][column] : '';

              return <span className='cell'>{letter}</span>;
            })}
          </p>
        );
      })}
    </div>
  );
}

export default Guess;
