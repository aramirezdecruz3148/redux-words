export const getAllWords = state => state.words.dictionary;

export const getWordsByCount = (state, count = 10) => {
  return getAllWords(state).slice(0, count); 
};

export const getSearchTerm = state => state.words.searchTerm;

export const getTopWordsByTerm = (state, count) => {
  const searchTerm = getSearchTerm(state);
  return getAllWords(state).filter(word => {
    return word.includes(searchTerm);
  }).slice(0, count);
};
