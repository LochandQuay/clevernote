import {connect} from 'react-redux';
import { fetchNote, fetchNotes } from '../../actions/note_actions';
import { fetchNotebooks } from '../../actions/notebook_actions';
import Dashboard from './dashboard';

const mapStateToProps = (state) => {

  let notesObject = {};
  // session.currentUser.notes.forEach(note => {
  //   notesObject[note.id] = note;
  // });

  state.notes.notes.forEach(note => {
    notesObject[note.id] = note;
  });

  return ({
    currentUser: state.session.currentUser,
    notes: notesObject
  });
};

const mapDispatchToProps = dispatch => ({
  fetchNote: (id) => dispatch(fetchNote(id)),
  fetchNotes: () => dispatch(fetchNotes()),
  fetchNotebooks: () => dispatch(fetchNotebooks())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
