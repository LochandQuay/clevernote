import { connect } from 'react-redux';
import NoteIndex from './note_index';
import { fetchNotes, setCurrentNote } from '../../actions/note_actions';
// import { fetchNotebooks, fetchNotebook, deleteNotebook }
//   from '../../actions/notebook_actions';
// import { fetchTags, fetchTag, deleteTag, fetchNoteTags,
//   setCurrentTag, deleteNoteTag }
//   from '../../actions/tag_actions';

const mapStateToProps = (state, ownProps) => ({
  notes: ownProps.notes,
  // currentNote: state.notes.currentNote
  currentNote: state.notes.byId[state.notes.currentNote]
});

const mapDispatchToProps = dispatch => ({
  setCurrentNote: note => dispatch(setCurrentNote(note))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteIndex);
