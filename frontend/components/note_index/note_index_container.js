import { connect } from 'react-redux';
import NoteIndex from './note_index';
import { fetchNotes, setCurrentNote } from '../../actions/note_actions';
import { fetchNotebooks, fetchNotebook, deleteNotebook }
  from '../../actions/notebook_actions';
import { fetchTags, fetchTag, deleteTag, fetchNoteTags,
  deleteNoteTag }
  from '../../actions/tag_actions';

const mapStateToProps = (state, ownProps) => ({
  currentNote: state.notes.currentNote,
  notes: state.notes.notes,
  currentNotebook: state.notebooks.currentNotebook,
  currentTag: state.tags.currentTag,
  filteredNotes: state.tags.filteredNotesByTag
});

const mapDispatchToProps = dispatch => ({
  fetchNotes: () => dispatch(fetchNotes()),
  fetchNotebook: id => dispatch(fetchNotebook(id)),
  fetchNotebooks: () => dispatch(fetchNotebooks()),
  deleteNotebook: id => dispatch(deleteNotebook(id)),
  fetchTag: id => dispatch(fetchTag(id)),
  fetchTags: () => dispatch(fetchTags()),
  deleteTag: id => dispatch(deleteTag(id)),
  fetchNoteTags: id => dispatch(fetchNoteTags(id)),
  deleteNoteTag: data => dispatch(deleteNoteTag(data)),
  setCurrentNote: note => dispatch(setCurrentNote(note))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteIndex);
