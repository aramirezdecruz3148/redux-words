import { connect } from 'react-redux';
import SearchForm from '../../components/words/SearchForm';
import { getSearchTerm } from '../../selectors/wordsSelectors';

const mapStateToProps = state => ({ state });

const mapDispatchToProps = dispatch => ({
  handleOnChange({ target }) {
    dispatch(getSearchTerm(target.value));
  },
  handleOnSubmit(event) {
    event.preventDefault();
    //I think getTopWordsByTerm will go here
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);
