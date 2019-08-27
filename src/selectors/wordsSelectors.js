export const getAllWords = state => state.dictionary;
export const getWordsByCount = (state, count = 1000) => {
  return getAllWords(state).slice(0, count); 
};

//need to look at source code for using match and plug that in as
//the second argument to my selector in TopWords