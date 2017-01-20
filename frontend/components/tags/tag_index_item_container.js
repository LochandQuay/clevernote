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

import { fetchNotes, fetchTaggedNotes } from '../../actions/note_actions';
import { setCurrentNotebook } from '../../actions/notebook_actions';

const mapStateToProps = (state) => ({
  currentNote: state.notes.currentNote,
  notes: state.notes.notes,
  currentTag: state.tags.currentTag,
  tags: state.tags.sortedTags
});

// NOTE THAT FETCH TAG RETURNS ARRAY OF TAGGED NOTES
const mapDispatchToProps = dispatch => ({
  setCurrentTag: (tag) => dispatch(setCurrentTag(tag)),
  setCurrentNotebook: (notebook) => dispatch(setCurrentNotebook(notebook)),
  fetchTags: () => dispatch(fetchTags()),
  fetchTag: (id) => dispatch(fetchTag(id)),
  fetchTaggedNotes: (tag) => dispatch(fetchTaggedNotes(tag)),
  deleteTag: (tagId) => dispatch(deleteTag(tagId)),
  createTag: (tag) => dispatch(createTag(tag)),
  fetchNotes: () => dispatch(fetchNotes())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagIndexItem);
