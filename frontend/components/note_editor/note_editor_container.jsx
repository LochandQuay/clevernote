import { connect } from 'react-redux';
import {
  fetchNote, updateNote, deleteNote
} from '../../actions/note_actions';
import NoteEditor from './note_editor';

const mapStateToProps = ({session}, ownProps) => {
  return ({
    loggedOut: Boolean(session.currentUser),
    user: session.currentUser,
    note: session.currentUser.notes[ownProps.params.id]
  });
};

const mapDispatchToProps = dispatch => ({
  fetchNote: (userId, noteId) => dispatch(fetchNote(userId, noteId)),
  updateNote: (userId, noteId) => dispatch(updateNote(userId, noteId)),
  deleteNote: (userId, noteId) => dispatch(deleteNote(userId, noteId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteEditor);
