import { connect } from 'react-redux';
import NoteIndex from './note_index';
import { setCurrentNote } from '../../actions/note_actions';

const mapStateToProps = state => ({
  currentNote: state.notes.currentNote,
});

const mapDispatchToProps = dispatch => ({
  setCurrentNote: note => dispatch(setCurrentNote(note)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(NoteIndex);
