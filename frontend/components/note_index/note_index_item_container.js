import { connect } from 'react-redux';
import NoteIndexItem from './note_index_item';
import { setCurrentNote, deleteNote }
  from '../../actions/note_actions';

const mapStateToProps = state => ({
  tagCount: Object.keys(state.tags.byId).length,
  currentNote: state.notes.currentNote,
});

const mapDispatchToProps = dispatch => ({
  setCurrentNote: note => dispatch(setCurrentNote(note)),
  deleteNote: noteId => dispatch(deleteNote(noteId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(NoteIndexItem);
