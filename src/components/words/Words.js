import React from 'react';
import PropTypes from 'prop-types';

function Words({ words }) {
  const wordsList = words.map((word) => (
    <li key={word}>
      <h3>{word}</h3>
    </li>
  ));
  return (
    <ul>
      {wordsList}
    </ul>
  );
}

Words.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Words;
