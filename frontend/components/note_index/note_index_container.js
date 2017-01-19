import { connect } from 'react-redux';
import NoteIndex from './note_index';
import { fetchNotes, setCurrentNote } from '../../actions/note_actions';
import { fetchNotebooks, fetchNotebook, deleteNotebook }
  from '../../actions/notebook_actions';

const mapStateToProps = (state, ownProps) => ({
  currentNote: state.notes.currentNote,
  notes: state.notes.notes,
  currentNotebook: state.notebooks.currentNotebook
});

const mapDispatchToProps = dispatch => ({
  fetchNotes: () => dispatch(fetchNotes()),
  fetchNotebook: id => dispatch(fetchNotebook(id)),
  fetchNotebooks: () => dispatch(fetchNotebooks()),
  deleteNotebook: id => dispatch(deleteNotebook(id)),
  setCurrentNote: note => dispatch(setCurrentNote(note))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteIndex);
