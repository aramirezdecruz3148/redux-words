import { connect } from 'react-redux';
import Words from '../../components/words/Words';

const mapStateToProps = state => ({ state }); 

export default connect(
  mapStateToProps
)(Words);
