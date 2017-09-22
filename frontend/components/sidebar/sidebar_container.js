import { connect } from 'react-redux';
import Sidebar from './sidebar';
import { setCurrentNote, fetchNotes, createNote }
  from '../../actions/note_actions';
import { fetchNotebooks, setCurrentNotebook, createNotebook }
  from '../../actions/notebook_actions';
import { setCurrentTag }
  from '../../actions/tag_actions';
import { logout } from '../../actions/session_actions';
import { sorted, alphaSort } from '../../reducers/selectors';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  notes: sorted(state.notes),
  notebooks: alphaSort(state.notebooks),
  currentNotebook: state.notebooks.byId[state.notebooks.currentNotebook],
  currentTag: state.tags.byId[state.tags.currentTag],
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchNotes: () => dispatch(fetchNotes()),
  setCurrentNote: note => dispatch(setCurrentNote(note)),
  createNote: note => dispatch(createNote(note)),
  fetchNotebooks: () => dispatch(fetchNotebooks()),
  setCurrentNotebook: notebook => dispatch(setCurrentNotebook(notebook)),
  createNotebook: notebook => dispatch(createNotebook(notebook)),
  setCurrentTag: tag => dispatch(setCurrentTag(tag)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Sidebar);
