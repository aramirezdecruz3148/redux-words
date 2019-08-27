import { connect } from 'react-redux';
import Words from '../../components/words/Words';
import { getWordsByCount } from '../../selectors/wordsSelectors';

const mapStateToProps = (state, props) => ({
  words: getWordsByCount(state, props.match.params.count)
}); 

export default connect(
  mapStateToProps
)(Words);
