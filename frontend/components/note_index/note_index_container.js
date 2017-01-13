import { connect } from 'react-redux';
import {
  fetchNotes, fetchNote, updateNote, deleteNote
} from '../../actions/note_actions';
import NoteIndex from './note_index';

const mapStateToProps = ({session}) => ({
  user: session.currentUser,
  notes: Object.keys(session.currentUser.notes)
    .map(id => session.currentUser.notes[id])
});

const mapDispatchToProps = dispatch => ({
  fetchNotes: userId => dispatch(fetchNotes(userId)),
  fetchNote: (userId, noteId) => dispatch(fetchNote(userId, noteId)),
  updateNote: (userId, noteId) => dispatch(updateNote(userId, noteId)),
  deleteNote: (userId, noteId) => dispatch(deleteNote(userId, noteId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteIndex);
