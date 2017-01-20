import { connect } from 'react-redux';
import {
  fetchNote, fetchNotes, updateNote, deleteNote, createNote
} from '../../actions/note_actions';

import { fetchNoteTags, fetchTag, createTag, deleteNoteTag, fetchTags }
  from '../../actions/tag_actions';

import { fetchNotebooks, fetchNotebook } from '../../actions/notebook_actions';
import NoteEditor from './note_editor';

const mapStateToProps = (state) => {
  return ({
    loggedOut: Boolean(!state.session.currentUser),
    user: state.session.currentUser,
    notebooks: state.notebooks.sortedNotebooks,
    currentNotebook: state.notebooks.currentNotebook,
    currentTag: state.tags.currentTag,
    tags: state.tags.sortedTags,
    noteTags: state.tags.currentNoteTags
  });
};

const mapDispatchToProps = dispatch => ({
  fetchNotes: () => dispatch(fetchNotes()),
  fetchNote: (noteId) => dispatch(fetchNote(noteId)),
  updateNote: (note) => dispatch(updateNote(note)),
  createNote: (note) => dispatch(createNote(note)),
  deleteNote: (noteId) => dispatch(deleteNote(noteId)),
  fetchTags: () => dispatch(fetchTags()),
  fetchNoteTags: () => dispatch(fetchNoteTags()),
  fetchTag: (id) => dispatch(fetchTag(id)),
  createTag: (tag) => dispatch(createTag(tag)),
  deleteNoteTag: (data) => dispatch(deleteNoteTag(data)),
  fetchNotebooks: () => dispatch(fetchNotebooks()),
  fetchNotebook: (id) => dispatch(fetchNotebook(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteEditor);
