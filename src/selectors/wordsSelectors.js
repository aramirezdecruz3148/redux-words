export const getAllWords = state => state.dictionary;
export const getWordsByCount = (state, count) => {
  return getAllWords(state).slice(0, count); 
};
