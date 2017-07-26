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

import { fetchNotes, setCurrentNote } from '../../actions/note_actions';
import { setCurrentTag } from '../../actions/tag_actions';

import { sorted, alphaSort } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  currentNote: state.notes.byId[state.notes.currentNote],
  notes: sorted(state.notes),
  currentNotebook: state.currentNotebook,
  notebooks: alphaSort(state.notebooks)
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentTag: tag => dispatch(setCurrentTag(tag)),
  setCurrentNote: note => dispatch(setCurrentNote(note)),
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
