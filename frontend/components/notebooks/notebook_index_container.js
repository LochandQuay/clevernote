import { connect } from 'react-redux';
import NotebookIndex from './notebook_index';
import { fetchNotebooks, createNotebook, setCurrentNotebook }
  from '../../actions/notebook_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  currentNotebook: state.notebooks.currentNotebook,
  notebooks: state.notebooks.sortedNotebooks
});

const mapDispatchToProps = dispatch => ({
  fetchNotebooks: () => dispatch(fetchNotebooks()),
  createNotebook: notebook => dispatch(createNotebook(notebook)),
  setCurrentNotebook: notebook => dispatch(setCurrentNotebook(notebook))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookIndex);
