import { connect } from 'react-redux';
import {
  fetchNote, fetchNotes, updateNote, deleteNote, createNote
} from '../../actions/note_actions';
import RichTextEditor from './rich_text_editor';

const mapStateToProps = (state, ownProps) => {
  return ({
    loggedOut: Boolean(!state.session.currentUser),
    user: state.session.currentUser,
    note: state.notes.currentNote
  });
};

const mapDispatchToProps = dispatch => ({
  fetchNotes: () => dispatch(fetchNotes()),
  fetchNote: (noteId) => dispatch(fetchNote(noteId)),
  updateNote: (note) => dispatch(updateNote(note)),
  createNote: (note) => dispatch(createNote(note)),
  deleteNote: (noteId) => dispatch(deleteNote(noteId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RichTextEditor);
