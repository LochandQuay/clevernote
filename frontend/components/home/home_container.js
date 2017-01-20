import {connect} from 'react-redux';
import Home from './home';
// import { fetchNotes, setCurrentNote, createNote }
//   from '../../actions/note_actions';
// import { fetchNotebooks, setCurrentNotebook }
//   from '../../actions/notebook_actions';
import { fetchTags }
  from '../../actions/tag_actions';
import { logout } from '../../actions/session_actions';

import { fetchNotes } from '../../actions/note_actions';
import { fetchNotebooks } from '../../actions/notebook_actions';

// #NB: Required functions:
  // fetch notes
  // fetch notebooks
  // fetch tags
  // log out

// #NB: Required Props:
  // current user
  // logged in boolean


const mapStateToProps = ({session, notes, notebooks, tags}) => {
  return ({
    currentUser: session.currentUser,
    // currentNote: notes.currentNote,
    // currentNotebook: notebooks.currentNotebook,
    // notebooks: notebooks.sortedNotebooks,
    // notes: notes.notes,
    // tags: tags.sortedTags,
    // errors: session.errors
    loggedIn: Boolean(session.currentUser)
  });
};

const mapDispatchToProps = dispatch => ({
  fetchNotes: () => dispatch(fetchNotes()),
  // setCurrentNote: (note) => dispatch(setCurrentNote(note)),
  fetchNotebooks: () => dispatch(fetchNotebooks()),
  // setCurrentNotebook: (notebook) => dispatch(setCurrentNotebook(notebook)),
  // createNote: (note) => dispatch(createNote(note))
  fetchTags: () => dispatch(fetchTags()),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
