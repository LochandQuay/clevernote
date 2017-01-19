import { connect } from 'react-redux';
import NotebookIndexItem from './notebook_index_item';
import {
  setCurrentNotebook,
  fetchNotebooks,
  deleteNotebook,
  createNotebook,
  fetchNotebook
}
  from '../../actions/notebook_actions';

import { fetchNotes } from '../../actions/note_actions';

const mapStateToProps = (state) => ({
  currentNotebook: state.notebooks.currentNotebook,
  notebooks: state.notebooks.sortedNotebooks
});

const mapDispatchToProps = dispatch => ({
  setCurrentNotebook: (notebook) => dispatch(setCurrentNotebook(notebook)),
  fetchNotebooks: () => dispatch(fetchNotebooks()),
  fetchNotebook: (id) => dispatch(fetchNotebook(id)),
  deleteNotebook: (notebookId) => dispatch(deleteNotebook(notebookId)),
  createNotebook: (notebook) => dispatch(createNotebook(notebook)),
  fetchNotes: () => dispatch(fetchNotes())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookIndexItem);
