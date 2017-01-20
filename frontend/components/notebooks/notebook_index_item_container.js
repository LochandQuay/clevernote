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
import { setCurrentTag } from '../../actions/tag_actions';

// #NB: Required Props:
//   currentNote
//   currentNotebook
//   notes
//   notebooks
//
// // #NB: Required functions:
//   fetchNotes
//   setCurrentNote
//   fetchNotebooks
//   createNotebook
//   deleteNotebook
//   setCurrentNotebook
//   setCurrentTag

const mapStateToProps = (state) => ({
  currentNote: state.notes.currentNote,
  notes: state.notes.notes,
  currentNotebook: state.notebooks.currentNotebook,
  notebooks: state.notebooks.sortedNotebooks
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentTag: tag => dispatch(setCurrentTag(tag)),
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
