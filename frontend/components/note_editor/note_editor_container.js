import { connect } from 'react-redux';
import {
  fetchNote, fetchNotes, updateNote, deleteNote, setCurrentNote
} from '../../actions/note_actions';

import NoteEditor from './note_editor';

import { sorted, alphaSort } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  let notes = sorted(state.notes);
  return ({
    noteCount: notes.length,
    currentNote: state.notes.byId[state.notes.currentNote],
    user: state.session.currentUser,
    notebooks: alphaSort(state.notebooks),
    notes: notes
  });
};

const mapDispatchToProps = dispatch => ({
  fetchNotes: () => dispatch(fetchNotes()),
  fetchNote: (noteId) => dispatch(fetchNote(noteId)),
  updateNote: (note) => dispatch(updateNote(note)),
  deleteNote: (noteId) => dispatch(deleteNote(noteId)),
  setCurrentNote: note => dispatch(setCurrentNote(note))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteEditor);
