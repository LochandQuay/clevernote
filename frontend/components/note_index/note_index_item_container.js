import { connect } from 'react-redux';
import NoteIndexItem from './note_index_item';
import { setCurrentNote, fetchNotes, deleteNote }
  from '../../actions/note_actions';
import { fetchNotebook } from '../../actions/notebook_actions';
import { fetchTag, fetchTags, setCurrentTag } from '../../actions/tag_actions';


const mapStateToProps = (state, ownProps) => ({
  tagCount: state.tags.sortedTags.length,
  currentNote: state.notes.currentNote,
  notes: ownProps.notes,
  allNotes: state.notes.notes
});

const mapDispatchToProps = dispatch => ({
  setCurrentNote: (note) => dispatch(setCurrentNote(note)),
  fetchNotes: () => dispatch(fetchNotes()),
  deleteNote: noteId => dispatch(deleteNote(noteId)),
  // fetchNotebook: (id) => dispatch(fetchNotebook(id)),
  // fetchTag: id => dispatch(fetchTag(id))
  fetchTags: () => dispatch(fetchTags()),
  setCurrentTag: tag => dispatch(setCurrentTag(tag))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteIndexItem);
