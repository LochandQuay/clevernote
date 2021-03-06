import { connect } from 'react-redux';
import TagIndexItem from './tag_index_item';
import {
  setCurrentTag,
  fetchTags,
  deleteTag,
  createTag,
  fetchTag,
}
  from '../../actions/tag_actions';

import { fetchNotes, setCurrentNote }
  from '../../actions/note_actions';
import { setCurrentNotebook } from '../../actions/notebook_actions';
import { sorted, sortTags } from '../../reducers/selectors';

const mapStateToProps = state => ({
  currentNote: state.notes.byId[state.notes.currentNote],
  notes: sorted(state.notes),
  currentTag: state.tags.byId[state.tags.currentTag],
  tags: sortTags(state.tags),
});

// NOTE THAT FETCH TAG RETURNS ARRAY OF TAGGED NOTES
const mapDispatchToProps = dispatch => ({
  setCurrentTag: tag => dispatch(setCurrentTag(tag)),
  setCurrentNotebook: notebook => dispatch(setCurrentNotebook(notebook)),
  fetchTags: () => dispatch(fetchTags()),
  fetchTag: id => dispatch(fetchTag(id)),
  deleteTag: tagId => dispatch(deleteTag(tagId)),
  createTag: tag => dispatch(createTag(tag)),
  fetchNotes: () => dispatch(fetchNotes()),
  setCurrentNote: note => dispatch(setCurrentNote(note)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(TagIndexItem);
