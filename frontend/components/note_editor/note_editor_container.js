import { connect } from 'react-redux';
import {
  fetchNote, fetchNotes, updateNote, deleteNote, createNote
} from '../../actions/note_actions';

import { fetchNotebooks, fetchNotebook } from '../../actions/notebook_actions';
import NoteEditor from './note_editor';

const mapStateToProps = (state) => {
  return ({
    loggedOut: Boolean(!state.session.currentUser),
    user: state.session.currentUser,
    notebooks: state.notebooks.sortedNotebooks,
    currentNotebook: state.notebooks.currentNotebook
  });
};

const mapDispatchToProps = dispatch => ({
  fetchNotes: () => dispatch(fetchNotes()),
  fetchNote: (noteId) => dispatch(fetchNote(noteId)),
  updateNote: (note) => dispatch(updateNote(note)),
  createNote: (note) => dispatch(createNote(note)),
  deleteNote: (noteId) => dispatch(deleteNote(noteId)),
  fetchNotebooks: () => dispatch(fetchNotebooks()),
  fetchNotebook: (id) => dispatch(fetchNotebook(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteEditor);
