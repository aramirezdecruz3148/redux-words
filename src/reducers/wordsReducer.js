import words from '../fixtures/words.json';
import { UPDATE_SEARCH_TERM } from '../actions/wordsActions.js';

const initialState = {
  dictionary: [...words],
  searchTerm: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_SEARCH_TERM:
      return { ...state, searchTerm: action.payload };
    default: 
      return state;
  }
}
