import { connect } from 'react-redux';
import NoteIndex from './note_index';
import { fetchNotes, setCurrentNote } from '../../actions/note_actions';

const mapStateToProps = (state, ownProps) => ({
  currentNote: state.notes.currentNote,
  notes: ownProps.notes
});

const mapDispatchToProps = dispatch => ({
  fetchNotes: () => dispatch(fetchNotes()),
  setCurrentNote: note => dispatch(setCurrentNote(note))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteIndex);
