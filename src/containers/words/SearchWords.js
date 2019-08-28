import { connect } from 'react-redux';
import SearchForm from '../../components/words/SearchForm';
import { getSearchTerm } from '../../selectors/wordsSelectors';
import { updateSearchTerm } from '../../actions/wordsActions';

const mapStateToProps = (state, /*props*/) => ({
  searchTerm: getSearchTerm(state)
  // props.history.push(`/?query=${searchTerm}`)
});

const mapDispatchToProps = dispatch => ({
  handleOnChange({ target }) {
    dispatch(updateSearchTerm(target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);
