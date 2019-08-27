import React from 'react';
import PropTypes from 'prop-types';

function SearchForm({ handleOnSubmit, searchTerm, handleOnChange }) {
  return (
    <form onSubmit={handleOnSubmit}>
      <input 
        type='text' 
        value={searchTerm} 
        name='searchTerm' 
        onChange={handleOnChange} 
      />\
      <button>Search 🔍</button>
    </form>
  );
}

SearchForm.propTypes = {
  handleOnSubmit: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired
};

export default SearchForm;
