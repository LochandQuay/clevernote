import {connect} from 'react-redux';
import { fetchNote, fetchNotes } from '../../actions/note_actions';
import Dashboard from './dashboard';

const mapStateToProps = ({session}) => {

  let notesObject = {};
  session.currentUser.notes.forEach(note => {
    notesObject[note.id] = note;
  });

  return ({
    currentUser: session.currentUser,
    notes: notesObject
  });
};

const mapDispatchToProps = dispatch => ({
  fetchNote: (userId, noteId) => dispatch(fetchNote(userId, noteId)),
  fetchNotes: () => dispatch(fetchNotes())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
