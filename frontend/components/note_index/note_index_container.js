import { connect } from 'react-redux';
import NoteIndex from './note_index';
import { fetchNotes, setCurrentNote } from '../../actions/note_actions';
import { fetchNotebooks, fetchNotebook, deleteNotebook }
  from '../../actions/notebook_actions';
import { fetchTags, fetchTag, deleteTag, fetchNoteTags,
  setCurrentTag, deleteNoteTag }
  from '../../actions/tag_actions';

// #NB: Required Props:
  // notes
  // current note

// #NB required functions:
  // set current note


const mapStateToProps = (state, ownProps) => ({
  // currentUser: state.session.currentUser,
  // notes: state.notes.notes,
  notes: ownProps.notes,
  // notebooks: state.notebooks.sortedNotebooks,
  // currentNotebook: state.notebooks.currentNotebook,
  // currentTag: state.tags.currentTag,
  // filteredNotes: state.tags.filteredNotesByTag,
  currentNote: state.notes.currentNote
});

const mapDispatchToProps = dispatch => ({
  // fetchNotes: () => dispatch(fetchNotes()),
  // fetchNotebook: id => dispatch(fetchNotebook(id)),
  // fetchNotebooks: () => dispatch(fetchNotebooks()),
  // deleteNotebook: id => dispatch(deleteNotebook(id)),
  // fetchTag: id => dispatch(fetchTag(id)),
  // fetchTags: () => dispatch(fetchTags()),
  // deleteTag: id => dispatch(deleteTag(id)),
  // fetchNoteTags: id => dispatch(fetchNoteTags(id)),
  // deleteNoteTag: data => dispatch(deleteNoteTag(data)),
  setCurrentNote: note => dispatch(setCurrentNote(note))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteIndex);
