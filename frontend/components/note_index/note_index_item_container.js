import { connect } from 'react-redux';
import NoteIndexItem from './note_index_item';
import { setCurrentNote, fetchNotes, deleteNote }
  from '../../actions/note_actions';
import { fetchNotebook } from '../../actions/notebook_actions';

const mapStateToProps = state => ({
  currentNote: state.notes.currentNote,
  notes: state.notes.notes
});

const mapDispatchToProps = dispatch => ({
  setCurrentNote: (note) => dispatch(setCurrentNote(note)),
  fetchNotes: () => dispatch(fetchNotes()),
  deleteNote: noteId => dispatch(deleteNote(noteId)),
  fetchNotebook: (id) => dispatch(fetchNotebook(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteIndexItem);
