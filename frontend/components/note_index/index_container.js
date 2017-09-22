import { connect } from 'react-redux';
import Index from './index';
import { deleteNotebook } from '../../actions/notebook_actions';
import { createNote, setCurrentNote }
  from '../../actions/note_actions';
import { sorted, alphaSort, filteredNotes } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  let notes = sorted(state.notes);
  if (state.notebooks.currentNotebook) {
    notes = filteredNotes(notes, 'notebook', state.notebooks.currentNotebook);
  } else if (state.tags.currentTag) {
    notes = filteredNotes(notes, 'tag', state.tags.currentTag);
  }

  return ({
    currentUser: state.session.currentUser,
    currentNotebook: state.notebooks.byId[state.notebooks.currentNotebook],
    currentTag: state.tags.byId[state.tags.currentTag],
    notebooks: alphaSort(state.notebooks),
    notes,
  });
};

const mapDispatchToProps = dispatch => ({
  deleteNotebook: id => dispatch(deleteNotebook(id)),
  createNote: note => dispatch(createNote(note)),
  setCurrentNote: note => dispatch(setCurrentNote(note)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Index);
