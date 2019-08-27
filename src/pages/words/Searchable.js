import React from 'react';
import SearchWords from '../../containers/words/SearchWords';
import TopWords from '../../containers/words/TopWords';
import PropTypes from 'prop-types';
export default function Searchable({ match }) {
  return (
    <>
      <SearchWords />
      <TopWords count={match.params.count} />
    </>
  );
}

Searchable.propTypes = {
  match: PropTypes.func.isRequired
};
