import React from 'react';

function Banner({ type, numberOfGuesses, answer }) {
  return (
    <div className={`${type} banner`}>
      {type === 'sad' ? (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      ) : null}

      {type === 'happy' ? (
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>{numberOfGuesses} guesses</strong>.
        </p>
      ) : null}
    </div>
  );
}

export default Banner;
