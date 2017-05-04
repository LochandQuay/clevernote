import { connect } from 'react-redux';
import Index from './index';
import { deleteNotebook, fetchNotebooks } from '../../actions/notebook_actions';
import { createNote, fetchNotes, setCurrentNote }
  from '../../actions/note_actions';

import { sorted, alphaSort, filteredNotes } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  let notes = sorted(state.notes);
  if (state.currentNotebook) {
    notes = filteredNotes(notes, 'notebook', state.currentNotebook.id);
  }
  else if (state.currentTag) {
    notes = filteredNotes(notes, 'tag', state.currentTag.id);
  }

  return ({
    currentUser: state.session.currentUser,
    currentNotebook: state.currentNotebook,
    currentTag: state.currentTag,
    notes: notes,
    notebooks: alphaSort(state.notebooks),
  });
};

const mapDispatchToProps = dispatch => ({
  deleteNotebook: id => dispatch(deleteNotebook(id)),
  createNote: note => dispatch(createNote(note)),
  fetchNotes: () => dispatch(fetchNotes()),
  fetchNotebooks: () => dispatch(fetchNotebooks()),
  setCurrentNote: (note) => dispatch(setCurrentNote(note))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
