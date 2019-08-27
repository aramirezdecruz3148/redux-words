import { connect } from 'react-redux';
import SearchForm from '../../components/words/SearchForm';

const mapStateToProps = state => ({ state });

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);
