import { connect } from 'react-redux';
import NotebookIndex from './notebook_index';
import { fetchNotebooks, setCurrentNotebook }
  from '../../actions/notebook_actions';

const mapStateToProps = (state) => ({
  currentNotebook: state.notebooks.currentNotebook,
  notebooks: state.notebooks.sortedNotebooks
});

const mapDispatchToProps = dispatch => ({
  fetchNotebooks: () => dispatch(fetchNotebooks()),
  setCurrentNotebook: notebook => dispatch(setCurrentNotebook(notebook))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookIndex);
