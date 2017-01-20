import { connect } from 'react-redux';
import Sidebar from './sidebar';
import { setCurrentNote, fetchNotes, createNote }
  from '../../actions/note_actions';
import { fetchNotebooks, fetchNotebook, setCurrentNotebook }
  from '../../actions/notebook_actions';
import { fetchTags, fetchTag }
  from '../../actions/tag_actions';
import { logout } from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  notes: state.notes.notes,
  notebooks: state.notebooks.sortedNotebooks,
  tags: state.tags.sortedTags,
  currentNote: state.notes.currentNote,
  currentNotebook: state.notebooks.currentNotebook,
  currentTag: state.tags.currentTag
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchNotes: () => dispatch(fetchNotes()),
  setCurrentNote: note => dispatch(setCurrentNote(note)),
  createNote: note => dispatch(createNote(note)),
  fetchNotebooks: () => dispatch(fetchNotebooks()),
  fetchNotebook: (id) => dispatch(fetchNotebook(id)),
  fetchTags: () => dispatch(fetchTags()),
  fetchTag: (id) => dispatch(fetchTag(id)),
  setCurrentNotebook: notebook => dispatch(setCurrentNotebook(notebook))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
