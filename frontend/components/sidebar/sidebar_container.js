import { connect } from 'react-redux';
import Sidebar from './sidebar';
import { setCurrentNote, fetchNotes, createNote }
  from '../../actions/note_actions';
import { fetchNotebooks, fetchNotebook, setCurrentNotebook, createNotebook }
  from '../../actions/notebook_actions';
import { fetchTags, fetchTag, setCurrentTag }
  from '../../actions/tag_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  notes: state.notes.notes,
  notebooks: state.notebooks.sortedNotebooks,
  // tags: state.tags.sortedTags,
  // currentNote: state.notes.currentNote,
  currentNotebook: state.notebooks.currentNotebook,
  currentTag: state.tags.currentTag
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch({type: "LOGOUT"}),
  fetchNotes: () => dispatch(fetchNotes()),
  setCurrentNote: note => dispatch(setCurrentNote(note)),
  createNote: note => dispatch(createNote(note)),
  fetchNotebooks: () => dispatch(fetchNotebooks()),
  // fetchNotebook: (id) => dispatch(fetchNotebook(id)),
  // fetchTags: () => dispatch(fetchTags()),
  // fetchTag: (id) => dispatch(fetchTag(id)),
  setCurrentNotebook: notebook => dispatch(setCurrentNotebook(notebook)),
  createNotebook: notebook => dispatch(createNotebook(notebook)),
  setCurrentTag: tag => dispatch(setCurrentTag(tag))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
