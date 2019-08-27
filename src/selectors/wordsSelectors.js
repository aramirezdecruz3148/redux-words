export const getAllWords = state => state.words.dictionary;

export const getWordsByCount = (state, count = 1000) => {
  return getAllWords(state).slice(0, count); 
};

export const getSearchTerm = state => state.words.searchTerm;

export const getTopWordsByTerm = (state, count) => {
  const searchTerm = getSearchTerm(state);
  return getWordsByCount(state, count).filter(word => {
    return word.includes(searchTerm);
  });
};
