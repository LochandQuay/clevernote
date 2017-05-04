import { connect } from 'react-redux';
import TagIndexItem from './tag_index_item';
import {
  setCurrentTag,
  fetchTags,
  deleteTag,
  createTag,
  fetchTag
}
  from '../../actions/tag_actions';

import { fetchNotes, setCurrentNote }
  from '../../actions/note_actions';
import { setCurrentNotebook } from '../../actions/notebook_actions';
import { sortTags } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  currentNote: state.currentNote,
  notes: state.notes.notes,
  currentTag: state.currentTag,
  tags: sortTags(state.tags)
});

// NOTE THAT FETCH TAG RETURNS ARRAY OF TAGGED NOTES
const mapDispatchToProps = dispatch => ({
  setCurrentTag: (tag) => dispatch(setCurrentTag(tag)),
  setCurrentNotebook: (notebook) => dispatch(setCurrentNotebook(notebook)),
  fetchTags: () => dispatch(fetchTags()),
  fetchTag: (id) => dispatch(fetchTag(id)),
  deleteTag: (tagId) => dispatch(deleteTag(tagId)),
  createTag: (tag) => dispatch(createTag(tag)),
  fetchNotes: () => dispatch(fetchNotes()),
  setCurrentNote: note => dispatch(setCurrentNote(note))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagIndexItem);
