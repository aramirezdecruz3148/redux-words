import { connect } from 'react-redux';
import SearchForm from '../../components/words/SearchForm';
import { getSearchTerm } from '../../selectors/wordsSelectors';

const mapStateToProps = state => ({ state });

const mapDispatchToProps = dispatch => ({
  handleOnChange({ target }) {
    console.log(target.value)
    dispatch(getSearchTerm(target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);
