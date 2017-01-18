import { connect } from 'react-redux';
import Sidebar from './sidebar';
import { setCurrentNote, fetchNotes, createNote }
  from '../../actions/note_actions';
import { logout } from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  notes: state.notes.notes
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchNotes: () => dispatch(fetchNotes()),
  setCurrentNote: note => dispatch(setCurrentNote(note)),
  createNote: note => dispatch(createNote(note))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
