import { connect } from 'react-redux';
import Words from '../../components/words/Words';
import { getWordsByCount } from '../../selectors/wordsSelectors';

const mapStateToProps = state => ({
  words: getWordsByCount(state, 1000)
}); 

export default connect(
  mapStateToProps
)(Words);
