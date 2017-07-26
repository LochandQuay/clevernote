import { connect } from 'react-redux';
import NoteIndexItem from './note_index_item';
import { setCurrentNote, fetchNotes, deleteNote }
  from '../../actions/note_actions';
import { fetchTags, setCurrentTag } from '../../actions/tag_actions';

const mapStateToProps = (state, ownProps) => ({
  tagCount: Object.keys(state.tags).length,
  currentNote: state.notes.byId[state.notes.currentNote],
  notes: ownProps.notes,
  allNotes: state.notes.allIds.map(idx => state.notes.byId[idx])
});

const mapDispatchToProps = dispatch => ({
  setCurrentNote: (note) => dispatch(setCurrentNote(note)),
  fetchNotes: () => dispatch(fetchNotes()),
  deleteNote: noteId => dispatch(deleteNote(noteId)),
  fetchTags: () => dispatch(fetchTags()),
  setCurrentTag: tag => dispatch(setCurrentTag(tag))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteIndexItem);
