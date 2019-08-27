export const getAllWords = state => state.dictionary;
export const getWordsByCount = (state, count = 1000) => {
  return getAllWords(state).slice(0, count); 
};
