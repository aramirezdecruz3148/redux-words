import words from '../fixtures/words.json';

const initialState = {
  dictionary: [...words]
};

export default function reducer(state = initialState, action) {
  return state;
}
