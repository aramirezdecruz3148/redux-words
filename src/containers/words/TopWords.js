import { connect } from 'react-redux';
import Words from '../../components/words/Words';
import { getTopWordsByTerm } from '../../selectors/wordsSelectors';

const mapStateToProps = (state, props) => ({
  words: getTopWordsByTerm(state, props.match.params.count)
}); 

export default connect(
  mapStateToProps
)(Words);
