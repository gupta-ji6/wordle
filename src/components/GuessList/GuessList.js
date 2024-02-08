import React from 'react';

function GuessList({ items = [] }) {
  return (
    <div className='guess-results'>
      {items.map((item, index) => (
        <p className='guess' key={`item-${index}`}>
          {item}
        </p>
      ))}
    </div>
  );
}

export default GuessList;
