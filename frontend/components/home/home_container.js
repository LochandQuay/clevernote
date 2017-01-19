import {connect} from 'react-redux';
import Home from './home';
import { fetchNotes, setCurrentNote, createNote } from '../../actions/note_actions';
import { fetchNotebooks, setCurrentNotebook }
  from '../../actions/notebook_actions';
import { logout } from '../../actions/session_actions';

const mapStateToProps = ({session, notes, notebooks}) => {
  return ({
    currentUser: session.currentUser,
    currentNote: notes.currentNote,
    currentNotebook: notebooks.currentNotebook,
    notebooks: notebooks.sortedNotebooks,
    notes: notes.notes,
    loggedIn: Boolean(session.currentUser),
    errors: session.errors
  });
};

const mapDispatchToProps = dispatch => ({
  fetchNotes: () => dispatch(fetchNotes()),
  setCurrentNote: (note) => dispatch(setCurrentNote(note)),
  fetchNotebooks: () => dispatch(fetchNotebooks()),
  setCurrentNotebook: (notebook) => dispatch(setCurrentNotebook(notebook)),
  createNote: (note) => dispatch(createNote(note))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
